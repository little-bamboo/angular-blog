import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {MaterialModule} from '../shared/material/material.module';

import {SharedModule} from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'home',
    component: HomeComponent,
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {
}
