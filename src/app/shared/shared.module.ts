import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ListErrorsComponent } from './list-errors';
import { ShowAuthedDirective } from './show-authed.directive';
import { SlugifyPipe } from './slugify';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    QuillModule
  ],
  declarations: [ShowAuthedDirective, ListErrorsComponent, SlugifyPipe, BreadcrumbComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ShowAuthedDirective,
    ListErrorsComponent,
    QuillModule,
    BreadcrumbComponent
  ]
})
export class SharedModule {
}
