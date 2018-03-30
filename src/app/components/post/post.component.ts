import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/post').subscribe(data => {
      this.posts = data;
    });
  }

}
