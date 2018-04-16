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

  post: Post = {} as Post;
  postForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the formbuilder to create a form group
    this.postForm = this.fb.group({
      title: '',
      description: '',
      body: '',
      author: '',
      intoImage: '',
      image: '',
      category: '',
      intro: '',
      hidden: true,
      createdAt: ''

    });

    // optional: subscribe to value changes on the form
    // this.postForm.valueChanges.subscribe(value=>this.updatePost(value));
  }

  ngOnInit() {

    console.log('editor init');

    // If there's a post prefetched, load it
    this.route.data.subscribe(
      (data: { post: Post }) => {
        if (data.post) {
          this.post = data.post;
          this.postForm.patchValue(data.post);
        }
      }
    );

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
    this.isSubmitting = true;

    // update the model
    this.updatePost(this.postForm.value);

    // post the changes
    this.postService.save(this.post)
      .subscribe(
        post => this.router.navigateByUrl('/post/' + post.slug),
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
  }

  updatePost(values: Object) {
    Object.assign(this.post, values);
  }
}
