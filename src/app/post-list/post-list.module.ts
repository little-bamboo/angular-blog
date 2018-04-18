import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PostListComponent} from './post-list.component';
import {MaterialModule} from '../shared/material/material.module';
import {AuthGuard} from '../core/services';

import {SharedModule} from '../shared';
import {PostComponent} from '../post/post.component';
import {PostResolver} from '../post/post-resolver.service';

const postListRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'posts',
    component: PostListComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumbs: true,
      text: 'Posts'
    },
    children: [
      {
        path: ':slug',
        component: PostComponent,
        resolve: {
          post: PostResolver
        },
        data: {
          breadcrumbs: '{{post.title}}'
        }
      }
    ]
  }
]);

@NgModule({
  imports: [
    postListRouting,
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    PostListComponent],
  providers: [AuthGuard]
})
export class PostListModule {
}
