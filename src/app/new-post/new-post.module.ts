import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NewPostComponent} from './new-post.component';
import {AuthGuard, NoAuthGuard} from '../core/services';
import {SharedModule} from '../shared';
import {MaterialModule} from '../shared/material/material.module';


const newPostRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'new-post',
    component: NewPostComponent,
    canActivate: [NoAuthGuard],
    data: {
      breadcrumb: true,
      text: 'New Post'
    }
  }
]);

@NgModule({
  imports: [
    newPostRouting,
    SharedModule,
    MaterialModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    NoAuthGuard
  ]
})
export class NewPostModule {
}
