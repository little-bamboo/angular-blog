import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PostComponent} from './post.component';
import {MaterialModule} from '../material/material.module';
import {AuthGuard} from '../shared/services/auth-guard.service';

import {SharedModule} from '../shared';
import {NoAuthGuard} from '../shared/services/no-auth-guard.service';

const postRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'post',
    component: PostComponent,
    canActivate: [NoAuthGuard],
    data: {
      breadcrumb: 'post'
    }
  }
]);

@NgModule({
  imports: [
    postRouting,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    PostComponent
  ],
  providers: [AuthGuard]
})
export class PostModule {
}
