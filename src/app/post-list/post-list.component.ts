import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../core/services/index';
import {Post} from '../core/models/index';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {environment} from '../../environments/environment';
import {SlugifyPipe} from '../shared/slugify';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements AfterViewInit {

  postsList: Post[];

  postUrl = `${environment.api_url}`;

  // Material columns
  displayedColumns = ['title', 'author', 'createdAt', 'body', 'image', 'buttons'];
  dataSource = new MatTableDataSource(this.postsList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    private postService: PostService,
    private router: Router
  ) {

    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => {
        this.postsList = posts;
        this.dataSource.data = this.postsList;
      });
  }

  newPost() {
    this.router.navigateByUrl('/new-post');
  }


  deletePost(post) {
    this.postService.deletePost(post._id)
      .subscribe(res => {
        this.getPosts();
      });
  }

  duplicatePost(post) {
    console.log('duplicate post-list: ' + JSON.stringify(post));
  }

  editPost(post) {
    console.log('editing post-list: ' + JSON.stringify(post));
    this.router.navigateByUrl('/edit/' + post.slug);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

