import {Injectable} from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['mean-token'];
  }

  saveToken(token: String) {
    window.localStorage['mean-token'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('mean-token');
  }

}
