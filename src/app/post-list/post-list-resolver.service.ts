import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {Post} from '../core/models';
import {PostService} from '../core/services';
import {PostListConfig} from '../core/models';

import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PostListResolver implements Resolve<Post> {

  constructor(
    private postService: PostService,
    private router: Router
  ) {
  }

  tagsListconfig: PostListConfig = {
    type: 'all',
    filters: {}
  };

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    // testing route params
    this.tagsListconfig.filters.tag = route.params['tag'];
    console.log(this.tagsListconfig);

    return this.postService.query(this.tagsListconfig)
      .map(posts => {
        if (posts) {
          const data = {};
          data['tag'] = route.params['tag'];
          data['posts'] = posts;
          return data;
        } else {
          this.router.navigateByUrl('/');
        }
      });
  }
}
