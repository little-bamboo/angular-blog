import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../../shared/services';
import {Post} from '../../shared/models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postsList: Post[];
  public newPost: Post = {} as Post;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => {
        this.postsList = posts;
      });
  }

  createPost() {
    this.postService.createPost(this.newPost)
      .subscribe((res) => {

        // Add the blog post to the list
        this.postsList.push(res.data);

        // Reset the fields to erase original post data
        this.newPost = {} as Post;

        // Refresh the list of posts
        this.getPosts();
      });
  }

  deletePost(post) {
    this.postService.deletePost(post._id)
      .subscribe(res => {
        this.getPosts();
      });
  }

}
