import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { LifecycleHooksRouteModule } from './lifecycle-hooks.route';

@NgModule({
  imports: [
    CommonModule,
    LifecycleHooksRouteModule
  ],
  declarations: [HomeComponent]
})
export class LifecycleHooksModule { }
