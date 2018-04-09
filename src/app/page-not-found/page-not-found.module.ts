import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {NoAuthGuard} from '../core/services';

const pageNotFoundRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'notfound',
    component: PageNotFoundComponent
  }
]);

@NgModule({
  imports: [
    pageNotFoundRouting
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [NoAuthGuard]
})
export class PageNotFoundModule {
}
