import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PostComponent} from './post.component';
import {MaterialModule} from '../../material/material.module';
import {SharedModule} from '../../shared';

const postRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'post',
    component: PostComponent
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
  providers: []
})
export class PostModule {
}
