import {Component, OnInit} from '@angular/core';
import Post from '../../models/post.models';
import {PostService} from '../../services/post.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Brian Schaper\'s Blog';

  constructor(
    private postService: PostService) {
  }

  public newPost: Post = new Post();

  postsList: Post[];

  ngOnInit(): void {

    // Initialize list of blog posts
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
        this.newPost = new Post();

        // Refresh the list of posts
        this.getPosts();
      });
  }

  deletePost(post) {
    this.postService.deletePost(post._id)
      .subscribe(res => {
        this.getPosts();
      },
        error => {
          //in case of error, add the callback to bring the item back and re-throw the error.
          error.callback=()=>this.items.splice(index, 0, item);
          throw error;
        });
  }


}
