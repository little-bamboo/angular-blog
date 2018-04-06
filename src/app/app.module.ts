import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {GlobalErrorHandler} from './global-error-handler';
import {HomeModule} from './home/home.module';
import {SharedModule, HeaderComponent, FooterComponent, UserService} from './shared';

import {RouterModule} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {ApiService, JwtService, PostService} from './shared/services';
import {PostModule} from './post/post.module';
import {AuthGuard} from './shared/services/auth-guard.service';
import {McBreadcrumbsConfig, McBreadcrumbsModule} from 'ngx-breadcrumbs';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    rootRouting,
    SharedModule,
    PostModule,
    McBreadcrumbsModule.forRoot()
  ],
  providers: [PostService, {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }, UserService, ApiService, AuthGuard, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule {
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
