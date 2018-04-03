import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {GlobalErrorHandler} from './global-error-handler';
import {HomeModule} from './components/home/home.module';
import {SharedModule, HeaderComponent, FooterComponent, UserService, AuthenticationService} from './shared';

import {RouterModule} from '@angular/router';
import {AuthModule} from './components/auth/auth.module';
import {ApiService, JwtService, PostService} from './shared/services';
import {PostModule} from './components/post/post.module';
import {AuthGuard} from './shared/services/auth-guard.service';

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
    AngularFontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    rootRouting,
    SharedModule,
    PostModule
  ],
  providers: [PostService, {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }, UserService, AuthenticationService, ApiService, AuthGuard, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
