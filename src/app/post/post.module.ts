import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PostComponent} from './post.component';
import {MaterialModule} from '../../material/material.module';
import {SharedModule} from '../../shared';
import {AuthGuard} from '../../shared/services/auth-guard.service';

const postRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'post',
    component: PostComponent,
    canActivate: [AuthGuard]
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
