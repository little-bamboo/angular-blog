import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../core/models';
import {PostService } from '../core/services';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) {
  }

  ngOnInit() {

    console.log('init post component');

    // this.route.data.subscribe(
    //   (data: { post: Post }) => {
    //     console.log(data);
    //     this.post = data.post;
    //   }
    // );

    this.getPost();
  }

  getPost(): void {
    const title = this.route.snapshot.paramMap.get('title');

    this.postService.get(title)
      .subscribe(data => {
        console.log('postdata: ', JSON.stringify(data));
        this.post = data;
      });
  }

}
