import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from './post-resolver.service';
import { PostComponent } from './post.component';


const routes: Routes = [
  {
    path: 'post',
    children: [
      {
        path: ':slug',
        component: PostComponent,
        resolve: {
          post: PostResolver
        },
        data: {
          breadcrumb: 'Post'
        }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
