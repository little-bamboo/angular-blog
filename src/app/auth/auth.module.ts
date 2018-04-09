import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {NoAuthGuard} from '../core/services';

import {SharedModule} from '../shared';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard],
    data: {
      breadcrumbs: 'Login'
    }
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard],
    data: {
      breadcrumbs: 'Register'
    }
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule
  ],
  declarations: [
    AuthComponent
  ],
  providers: [NoAuthGuard]
})

export class AuthModule {
}
