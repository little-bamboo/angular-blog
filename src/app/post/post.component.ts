import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../shared/services';
import {Post} from '../../shared/models';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, AfterViewInit {

  postsList: Post[];
  public newPost: Post = {} as Post;

  // Material columns
  displayedColumns = ['title', 'author', 'date', 'body'];
  dataSource = new MatTableDataSource(this.postsList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => {
        this.postsList = posts;
        this.dataSource = posts;
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

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

