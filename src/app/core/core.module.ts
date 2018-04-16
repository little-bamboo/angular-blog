import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpTokenInterceptor} from './interceptors';

import {
  ApiService,
  PostService,
  AuthGuard,
  JwtService,
  TagsService,
  UserService,
  LoaderService

} from './services';
import {SlugifyPipe} from '../shared/slugify';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    PostService,
    AuthGuard,
    JwtService,
    TagsService,
    UserService,
    LoaderService,
    SlugifyPipe
  ],
  declarations: []
})
export class CoreModule {
}
