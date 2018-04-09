import {Injectable} from '@angular/core';
import {Post} from '../models/index';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {HttpClient, HttpParams} from '@angular/common/http';

// Import the rxjs operator for mapping observable type
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators/map';

import {ApiService} from './api.service';
import {PostListConfig} from '../models/post-list-config.model';

@Injectable()
export class PostService {

  postUrl = `${environment.api_url}/api/posts`;

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) {
  }

  query(config: PostListConfig): Observable<{ posts: Post[], postsCount: number }> {
    // Convert filters to URLSearchParams
    const params = {};

    Object.keys(config.filters)
      .forEach((key) => {
        params[key] = config.filters[key];
      });

    return this.apiService.get('/api/posts' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({fromObject: params}));
  }

  // Create the post-list object
  save(post): Observable<any> {

    if (post._id) {

      resizeTo();


    } else {


      console.log('saving post');
      // return an observable of http post-list request
      return this.http.post(`${this.postUrl}`, post);
    }
  }

  // Read post-list, takes no arguments
  getPosts(): Observable<any> {
    return this.http.get(this.postUrl);
  }

  get(title): Observable<Post> {
    console.log(title)
    return this.apiService.get('/api/posts/' + title);
  }

  // Update the post-list object
  editPost(post: Post) {
    const editUrl = `${this.postUrl}`;
    // return the observable of the http put request
    return this.http.put(editUrl, post);
  }

  // Remove the post-list
  deletePost(id: string): any {
    // Delete the object using the id
    const deleteUrl = `${this.postUrl}/${id}`;
    return this.http.delete(deleteUrl)
      .map(res => {
        return res;
      });
  }

  // Default error handling method
  // private handleError(error: any): Promise<any> {
  //   console.error('An error occured', error.error.error.message); // for dev purposes only
  //   throw new Error(error.error.error.message);
  //   // return Promise.reject(error.message || error);
  // }

}
