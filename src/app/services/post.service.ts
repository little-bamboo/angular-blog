import {Injectable} from '@angular/core';
import Post from '../models/post.models';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

// Import the rxjs operator for mapping observable type
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

  api_url = 'http://localhost:3000';
  postUrl = `${this.api_url}/api/posts`;

  constructor(
    private http: HttpClient
  ) {
  }

  // Create the post object
  createPost(post: Post): Observable<any> {
    // return an observable of http post request
    return this.http.post(`${this.postUrl}`, post)
      .catch(this.handleError);
  }

  // Read post, takes no arguments
  getPosts(): Observable<any> {
    return this.http.get(this.postUrl);
  }

  // Update the post object
  editPost(post: Post) {
    const editUrl = `${this.postUrl}`;
    // return the observable of the http put request
    return this.http.put(editUrl, post);
  }

  // Remove the post
  deletePost(id: string): any {
    // Delete the object using the id
    const deleteUrl = `${this.postUrl}/${id}`;
    return this.http.delete(deleteUrl)
      .map(res => {
        return res;
      });
  }

  // Default error handling method
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error.error.error.message); // for dev purposes only
    throw new Error(error.error.error.message);
    // return Promise.reject(error.message || error);
  }

}
