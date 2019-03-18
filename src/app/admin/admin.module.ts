import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {MaterialModule} from '../shared/material/material.module';
import {AuthGuard} from '../core/services';

import {SharedModule} from '../shared';


const adminRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumbs: true,
      text: 'Admin'
    }
  }
]);

@NgModule({
  imports: [
    adminRouting,
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    AdminComponent],
  providers: [AuthGuard]
})
export class AdminModule {
}
