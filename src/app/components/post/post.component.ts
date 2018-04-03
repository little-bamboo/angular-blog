import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleService} from '../../shared/services';
import Article from '../../shared/models/article.models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  postsList: Article[];
  public newPost: Article = new Article();

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getPosts()
      .subscribe(posts => {
        this.postsList = posts;
      });
  }

  createPost() {
    this.articleService.createPost(this.newPost)
      .subscribe((res) => {

        // Add the blog post to the list
        this.postsList.push(res.data);

        // Reset the fields to erase original post data
        this.newPost = new Article();

        // Refresh the list of posts
        this.getArticles();
      });
  }

  deletePost(post) {
    this.articleService.deletePost(post._id)
      .subscribe(res => {
        this.getArticles();
      });
  }

}
