import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';

import { DirectiveLearnRouteModule } from './directive-learn.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectiveLearnRouteModule
  ],
  declarations: [
    HighlightDirective,
    UnlessDirective,
    InfiniteScrollDirective,
    ListComponent,
    HomeComponent
  ]
})
export class DirectiveLearnModule { }
