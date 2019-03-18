import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Post, PostService, UserService} from '../core';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class EditablePostResolver implements Resolve<Post> {
  constructor(
    private postService: PostService,
    private router: Router,
    private userService: UserService
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.postService.get(route.params['slug'])
      .pipe(
        map(
          post => {
            if (this.userService.isAuthenticated) {
              return post;
            } else {
              this.router.navigateByUrl('/');
            }
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
