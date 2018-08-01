import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRouteModule } from './dynamic-component.route';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicComponentRouteModule
  ],
  declarations: [
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    HomeComponent
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class DynamicComponentModule { }
