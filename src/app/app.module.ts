import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import {GlobalErrorHandler} from './global-error-handler';
import {HomeModule} from './home/home.module';
import {SharedModule, HeaderComponent, FooterComponent, UserService} from './shared';

import {AuthModule} from './auth/auth.module';
import {ApiService, JwtService, PostService} from './core/services';
import {AuthGuard} from './core/services';
import {McBreadcrumbsConfig, McBreadcrumbsModule} from 'ngx-breadcrumbs';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EditorComponent} from './editor/editor.component';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';
import {PostModule} from './post/post.module';
import {AppRoutingModule} from './app-routing.module';
import {PostListModule} from './post-list/post-list.module';


// const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    EditorComponent],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    SharedModule,
    PageNotFoundModule,
    PostModule,
    PostListModule,
    McBreadcrumbsModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [PostService, {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }, UserService, ApiService, AuthGuard, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Implementation outlined at https://github.com/McNull/ngx-breadcrumbs
  constructor(breadcrumbsConfig: McBreadcrumbsConfig) {

    breadcrumbsConfig.postProcess = (x) => {

      // Ensure that the first breadcrumb always points to home

      let y = x;

      if (x.length && x[0].text !== 'Home') {
        y = [
          {
            text: 'Home',
            path: ''
          }
        ].concat(x);
      }

      return y;
    };
  }
}
