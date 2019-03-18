import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {Post} from '../core/models';
import {PostService} from '../core/services';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PostResolver implements Resolve<Post> {

  constructor(
    private postService: PostService,
    private router: Router,
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.postService.get(route.params['slug'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
