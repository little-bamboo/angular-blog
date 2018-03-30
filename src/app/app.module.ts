import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {RegisterComponent} from './components/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {EditComponent} from './components/edit/edit.component';
import {PostService} from './services/post.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {GlobalErrorHandler} from './global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [PostService, {provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
