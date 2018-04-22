import {Injectable} from '@angular/core';
import {Post, PostListConfig} from '../models/index';
import {Observable} from 'rxjs/Observable';

import {HttpClient, HttpParams} from '@angular/common/http';

// Import the rxjs operator for mapping observable type
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators/map';

import {ApiService} from './api.service';


@Injectable()
export class PostService {

  postUrl = `${environment.api_url}/api/posts`;

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) {
  }

  query(config: PostListConfig): Observable<Post[]> {
    // Convert filters to URLSearchParams
    const params = {};

    Object.keys(config.filters)
      .forEach((key) => {
        params[key] = config.filters[key];
      });

    console.log(params);
    return this.apiService.get('/api/posts' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({fromObject: params}));
  }

  // Create the post-list object
  save(post): Observable<any> {

    const slug = post.get('slug');
    if (slug) {

      return this.http.put(`${this.postUrl}/` + slug, post);

    } else {
      // return an observable of http post-list request
      return this.http.post(`${this.postUrl}`, post);
    }
  }

  // Read post-list, takes no arguments
  getPosts(): Observable<Post[]> {
    return this.apiService.get('/api/posts/');
  }

  get(slug): Observable<Post> {

    return this.apiService.get('/api/posts/' + slug)
      .pipe(
        map(
          (data) => data
        ));
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

}
