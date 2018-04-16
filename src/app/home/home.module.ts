import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {MaterialModule} from '../shared/material/material.module';

import {SharedModule} from '../shared';
import {ChartsModule} from 'ng2-charts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AdvancedPieComponent} from '../charts/advanced-pie/advanced-pie.component';
import {AreaChartComponent} from '../charts/area-chart/area-chart.component';
import {BarChartComponent} from '../charts/bar-chart/bar-chart.component';
import {LineChartComponent} from '../charts/line-chart/line-chart.component';

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
    AdvancedPieComponent,
    AreaChartComponent,
    BarChartComponent,
    LineChartComponent
  ],
  providers: []
})
export class HomeModule {
}
