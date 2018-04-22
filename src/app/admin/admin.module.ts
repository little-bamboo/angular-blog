import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {MaterialModule} from '../shared/material/material.module';
import {AuthGuard} from '../core/services';

import {SharedModule} from '../shared';
import {PostComponent} from '../post/post.component';
import {PostResolver} from '../post/post-resolver.service';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    AdminComponent],
  providers: [AuthGuard]
})
export class PostListModule {
}
