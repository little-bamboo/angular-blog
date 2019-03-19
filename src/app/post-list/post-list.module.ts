import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { MaterialModule } from '../shared/material/material.module';
import { PostListResolver } from './post-list-resolver.service';
import { PostListComponent } from './post-list.component';



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
  },
  {
    path: 'posts',
    component: PostListComponent
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
