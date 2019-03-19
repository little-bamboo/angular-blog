import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { Post, PostService } from '../core/';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  postsList: Post[];

  postUrl = `${environment.api_url}`;

  tag: String;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }



  ngOnInit() {
    // console.log(this.route.snapshot.data);

    if (this.route.snapshot.data.postsData) {
      this.postsList = this.route.snapshot.data.postsData.posts;
      this.tag = this.route.snapshot.data.postsData.tag;

      console.log(this.postsList);
      console.log(this.tag);
    } else {
      console.log('get all posts');
      this.getAllPosts();
    }



  }

  getAllPosts() {
    this.postService.getPosts()
      .subscribe(data => {
        console.log(data);
        this.postsList = data;
      });
  }



}

