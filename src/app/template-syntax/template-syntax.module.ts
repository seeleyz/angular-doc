import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';

import { TemplateSyntaxRouteModule } from './template-syntax.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateSyntaxRouteModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class TemplateSyntaxModule { }
