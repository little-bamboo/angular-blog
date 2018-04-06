import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../shared/services/index';
import {Post} from '../shared/models/index';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements AfterViewInit {

  postsList: Post[];
  public newPost: Post = {} as Post;
  public files: any[];

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

  constructor(private postService: PostService) {

    this.files = [];

    postService.getPosts().subscribe(
      data => {
        this.postsList = data;
        this.dataSource.data = this.postsList;
      });
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => {
        this.postsList = posts;
        this.dataSource.data = this.postsList;
      });
  }

  onFileChanged(event: any) {
    this.files = event.target.files;

  }

  createPost(postData) {

    // Build formdata object and assign form values from the ngform object
    const formData = new FormData();
    const postValues = postData.value;

    for (const key in postValues) {
      if (postValues.hasOwnProperty(key)) {
        formData.append(key, postValues[key]);
      }
    }

    // Create timestamp for createdat
    const createdAt = new Date(Date.now());
    const created = createdAt.toString();
    formData.append('createdAt', created);

    // Iterate through files array and pull into fordata object
    for (const file in this.files) {
      if (this.files.hasOwnProperty(file)) {
        formData.append('image', this.files[file], this.files[file].name);
      }
    }

    this.postService.createPost(formData)
      .subscribe((res) => {

          // Add the blog post to the list
          this.postsList.push(res.data);

          // Erase form data after successful response
          postData.reset();

          // Refresh the list of posts
          this.getPosts();
        },
        (err) => {
          console.log(err);
          throw err;
        });
  }

  deletePost(post) {
    this.postService.deletePost(post._id)
      .subscribe(res => {
        this.getPosts();
      });
  }

  duplicatePost(post) {
    console.log('duplicate post: ' + JSON.stringify(post));
  }

  editPost(post) {
    console.log('editing post: ' + JSON.stringify(post));
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

