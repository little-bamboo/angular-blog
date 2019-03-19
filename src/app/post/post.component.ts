import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { Post } from '../core/models';
import { PostService } from '../core/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;
  postUrl = `${environment.api_url}`;

  // Use safeHtml pipe to modify html string to include iframe
  html: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {

  }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.postService.get(slug)
      .subscribe(data => {
        this.post = data;
        this.html = data.body;
      });
  }

}
