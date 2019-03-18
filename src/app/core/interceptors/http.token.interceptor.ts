import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from '../services';


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {
  }

  // Unnecessary to set headersConfig content type or accept values
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      // Configuring the header as app/json creates 400 error from express
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };

    // test for webtoken and set ehd
    const token = this.jwtService.getToken();

    headersConfig['client'] = 'brianschaper.com';

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
      const authReq = req.clone({ setHeaders: headersConfig });
      return next.handle(authReq);
    }

    console.log('headersConfig', headersConfig);

    return next.handle(req);
  }
}




