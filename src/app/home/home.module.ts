import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {MaterialModule} from '../shared/material/material.module';

import {SharedModule} from '../shared';
import {ChartsModule} from 'ng2-charts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AdvancedPieComponent} from '../advanced-pie/advanced-pie.component';

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
    MaterialModule,
    ChartsModule,
    NgxChartsModule
  ],
  declarations: [
    HomeComponent,
    AdvancedPieComponent

  ],
  providers: []
})
export class HomeModule {
}
