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
    PostModule
  ],
  providers: [PostService, {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }, UserService, ApiService, AuthGuard, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
