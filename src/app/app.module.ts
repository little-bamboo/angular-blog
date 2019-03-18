import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpTokenInterceptor } from './core/interceptors';
import { ApiService, AuthGuard, JwtService, LoaderService, PostService, TagsService } from './core/services';
import { EditorModule } from './editor/editor.module';
import { GlobalErrorHandler } from './global-error-handler';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { PostListModule } from './post-list/post-list.module';
import { PostModule } from './post/post.module';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent, HeaderComponent, SharedModule, UserService } from './shared';
import { MaterialModule } from './shared/material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    SharedModule,
    PageNotFoundModule,
    PostModule,
    PostListModule,
    EditorModule,
    AdminModule,
    NgbModule,
    NgxLocalStorageModule.forRoot(),
    AppRoutingModule
  ],
  providers: [LoaderService, TagsService, PostService, {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }, UserService, ApiService, AuthGuard, JwtService, {
      provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
