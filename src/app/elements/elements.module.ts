import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HomeComponent,
    PopupComponent
  ],
  entryComponents: [PopupComponent],
})
export class ElementsModule { }
