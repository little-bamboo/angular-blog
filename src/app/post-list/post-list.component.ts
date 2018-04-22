import {Component, OnInit} from '@angular/core';
import {PostService} from '../core/';
import {Post} from '../core/';
import {environment} from '../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {PostListConfig} from '../core/models';
import {PostListResolver} from './post-list-resolver.service';
import {Observable} from 'rxjs/Observable';

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
    private postService: PostService,
  ) {
  }

  tagsListconfig: PostListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    console.log(this.route.snapshot.data);

    this.postsList = this.route.snapshot.data.postsData.posts;
    this.tag = this.route.snapshot.data.postsData.tag;

  }


}

