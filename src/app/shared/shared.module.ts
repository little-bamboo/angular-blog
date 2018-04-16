import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {ListErrorsComponent} from './list-errors';

import {ShowAuthedDirective} from './show-authed.directive';
import {SlugifyPipe} from './slugify';
import {QuillModule} from 'ngx-quill';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    QuillModule
  ],
  declarations: [ShowAuthedDirective, ListErrorsComponent, SlugifyPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ShowAuthedDirective,
    ListErrorsComponent,
    QuillModule
  ]
})
export class SharedModule {
}
