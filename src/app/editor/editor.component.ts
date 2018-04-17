import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {Post, PostService} from '../core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  title: String = '';
  post: Post = {} as Post;
  postForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  fileName: String;
  image: any;

  introFileName: String;
  introImage: any;

  public postType: String = '';
  public files: any[];
  public introFiles: any[];
  public newPost: Post = {} as Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the formbuilder to create a form group
    this.postForm = this.createFormGroup();

    // optional: subscribe to value changes on the form
    // this.postForm.valueChanges.subscribe(value=>this.updatePost(value));
  }

  createFormGroup() {
    return this.fb.group(
      {
        title: new FormControl(),
        author: new FormControl(),
        body: new FormControl(),
        intro: new FormControl(),
        tags: new FormControl(),
        createdAt: new FormControl(),
        image: new FormControl(),
        introImage: new FormControl(),
        slug: new FormControl({value: '', disabled: true})
      });
  }

  ngOnInit() {

    console.log('editor init');

    // Set the title and postType (edit or new)
    this.route.url.subscribe(data => {
      this.postType = data[data.length - 1].path;
      // Set Title for the page accordingly
      this.title = (this.postType === 'edit') ? 'Edit Post' : 'New Post';
    });

    // If there's a post prefetched, load it
    this.route.data.subscribe(
      (data: { post: Post }) => {
        if (data.post) {
          this.post = data.post;
          console.log(this.post);

          // Reset image and introImage values to empty strings
          // file inputs do not allow value assignment

          this.post.image = '';
          this.post.introImage = '';

          this.postForm.patchValue(this.post);
        }
      }
    );

  }

  onFileChanged(event: any) {
    this.files = event.target.files;
    console.log(this.files);
    this.fileName = this.files[0].name;

    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.image = e.target.result;
    };

    reader.readAsDataURL(this.files[0]);

  }

  onIntroFileChaged(event: any) {
    this.introFiles = event.target.files;
    console.log(this.introFiles);
    this.introFileName = this.introFiles[0].name;

    const introReader = new FileReader();

    introReader.onload = (e: any) => {
      this.introImage = e.target.result;
    };

    introReader.readAsDataURL(this.introFiles[0]);
  }

  addTag() {
    // retrieve tag control
    const tag = this.tagField.value;

    // ony add if the tag is not there yet
    if (this.post.tags.indexOf(tag) < 0) {
      this.post.tags.push(tag);
    }

    // now clear the input
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.post.tags = this.post.tags.filter((tag) => tag !== tagName);
  }

  submitForm() {

    // Build formdata object and assign form values from the ngform object
    const formData = new FormData();
    const postValues = this.postForm.value;

    for (const key in postValues) {
      if (postValues.hasOwnProperty(key)) {
        formData.append(key, postValues[key]);
      }
    }

    // Create timestamp for createdat
    const createdAt = new Date(Date.now());
    const created = createdAt.toString();
    formData.append('createdAt', created);

    // Iterate through files array and pull into fordata object
    for (const file in this.files) {
      if (this.files.hasOwnProperty(file)) {
        formData.append('image', this.files[file], this.files[file].name);
      }
    }

    // Iterate through files array and pull into fordata object
    for (const file in this.introFiles) {
      if (this.files.hasOwnProperty(file)) {
        formData.append('introImage', this.files[file], this.files[file].name);
      }
    }

    // Test if you're creating or updating form object
    if (this.postType !== 'new') {

      formData.append('slug', this.post.slug);

      this.isSubmitting = true;

      // update the model
      this.updatePost(this.postForm.value);

      // post the changes
      this.postService.save(formData)
        .subscribe(
          post => this.router.navigateByUrl('/post/' + post.slug),
          err => {
            this.errors = err;
            this.isSubmitting = false;
          }
        );
    } else {
      this.postService.save(formData)
        .subscribe((res) => {

            // Erase form data after successful response
            this.resetForm();

          },
          (err) => {
            console.log(err);
            throw err;
          });
    }
  }

  resetForm() {
    this.postForm.reset();

    // Reset image and span labels as they are not apart of the form controls
    this.introImage = '';
    this.image = '';
    this.introFileName = '';
    this.fileName = '';
    this.files = [];
    this.introFiles = [];
  }

  updatePost(values: Object) {
    Object.assign(this.post, values);
  }
}
