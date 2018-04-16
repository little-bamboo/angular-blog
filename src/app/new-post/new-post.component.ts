import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Post} from '../core/models';
import {PostService} from '../core/services';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  public files: any[];
  public newPost: Post = {} as Post;


  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder) {

    this.postForm = this.createFormGroup();
  }

  createFormGroup() {
    return this.formBuilder.group(
      {
        title: new FormControl(),
        author: new FormControl(),
        body: new FormControl(),
        intro: new FormControl(),
        tags: new FormControl(),
        createdAt: new FormControl(),
        image: new FormControl(),
        intoImage: new FormControl(),
        slug: new FormControl({value: '', disabled: true})
      });
  }

  ngOnInit() {
  }

  onFileChanged(event: any) {
    this.files = event.target.files;

  }

  // onIntroFileChaged(event: any){
  //   this.introFiles = event.target.files;
  // }

  createPost(postData) {

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


    this.postService.save(formData)
      .subscribe((res) => {

          // Add the blog post-list to the list
          // this.postsList.push(res.data);

          // Erase form data after successful response
          this.postForm.reset();

          // Refresh the list of posts
          // this.getPosts();
        },
        (err) => {
          console.log(err);
          throw err;
        });
  }

}
