import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';

import {JwtService} from './jwt.service';
import {User} from '../models';
import {ApiService} from './api.service';
import {map} from 'rxjs/operators';

import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-localstorage';

@Injectable()
export class UserService {
  public currentUser: User = {} as User;

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private router: Router,
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService,
    private localStorage: LocalStorageService
  ) {
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.

  populate() {
    // If JWT detected, attempt to get & store user's info
    const user_token = this.jwtService.getToken();
    if (user_token) {
      this.isAuthenticatedSubject.next(true);
    } else {
      // Remove any potential remnants of previous auth states and push to home page
      this.purgeAuth();

    }
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/signin' : '';
    return this.apiService.post('/api/auth' + route, credentials)
      .pipe(map(
        data => {
          this.jwtService.saveToken(data.user.token);
          this.isAuthenticatedSubject.next(true);
          return data;
        }
      ));
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
      .put('/api/user', {user})
      .pipe(map(data => {
        // Update the currentUser observable
        this.currentUser = data.user;
        return data.user;
      }));
  }

}
