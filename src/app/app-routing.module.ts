import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostComponent} from './post/post.component';
import {EditorComponent} from './editor/editor.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'posts', component: PostListComponent
  },
  {
    path: 'posts/:title', component: PostComponent
  },
  {
    path: '**', redirectTo: '/notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
