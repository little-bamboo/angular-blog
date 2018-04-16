import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from './editor.component';
import {AuthGuard, NoAuthGuard} from '../core/services';
import {EditablePostResolver} from './editable-post-resolver.service';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: 'edit',
    data: {
      breadcrumbs: true,
      text: 'Edit'
    },
    canActivate: [NoAuthGuard],
    children: [
      {
        path: ':slug',
        component: EditorComponent,
        resolve: {
          post: EditablePostResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {
}
