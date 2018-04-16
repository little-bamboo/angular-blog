import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {ListErrorsComponent} from './list-errors';

import {ShowAuthedDirective} from './show-authed.directive';
import {SlugifyPipe} from './slugify';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [ShowAuthedDirective, ListErrorsComponent, SlugifyPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ShowAuthedDirective,
    ListErrorsComponent
  ]
})
export class SharedModule {
}
