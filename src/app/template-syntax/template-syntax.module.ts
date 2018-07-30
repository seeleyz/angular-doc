import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateSyntaxRouteModule } from './template-syntax.route';
import { HomeComponent } from './home/home.component';
import { TemRefVarComponent } from './tem-ref-var/tem-ref-var.component';
import { BuiltInStrucDirectiveComponent } from './built-in-struc-directive/built-in-struc-directive.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateSyntaxRouteModule
  ],
  declarations: [
    HomeComponent,
    TemRefVarComponent,
    BuiltInStrucDirectiveComponent
  ]
})
export class TemplateSyntaxModule { }
