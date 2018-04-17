import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../core/models';
import {PostService} from '../core/services';
import {SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;
  html: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) {

  }

  ngOnInit() {

    this.getPost();
  }

  getPost(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.postService.get(slug)
      .subscribe(data => {
        // console.log('postdata: ', JSON.stringify(data));
        this.post = data;
        this.html = data.body;
      });
  }

}
