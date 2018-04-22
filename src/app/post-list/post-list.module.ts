import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PostListComponent} from './post-list.component';
import {MaterialModule} from '../shared/material/material.module';

import {SharedModule} from '../shared';
import {PostListResolver} from './post-list-resolver.service';

const postListRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'posts/:tag',
    component: PostListComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      postsData: PostListResolver
    },
    data: {
      breadcrumbs: true,
      text: '{{postsData.tag}}'
    }
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
  providers: [PostListResolver]
})
export class PostListModule {
}
