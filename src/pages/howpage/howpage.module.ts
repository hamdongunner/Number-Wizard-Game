import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowpagePage } from './howpage';

@NgModule({
  declarations: [
    HowpagePage,
  ],
  imports: [
    IonicPageModule.forChild(HowpagePage),
  ],
  exports: [
    HowpagePage
  ]
})
export class HowpagePageModule {}
