import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-localstorage';


@Injectable()
export class JwtService {

  constructor(private storageService: LocalStorageService) {

  }

  getToken(): String {
    // return window.localStorage['mean-token'];
    console.log('token count: ', this.storageService.count());
    return this.storageService.get('mean-token');
  }

  saveToken(token: string) {
    // window.localStorage['mean-token'] = token;
    console.log(token);
    this.storageService.set('mean-token', token);
  }

  destroyToken() {
    // window.localStorage.removeItem('mean-token');
    this.storageService.remove('mean-token');
  }

}
