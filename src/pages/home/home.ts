import { HowpagePage } from './../howpage/howpage';
import { FirstPage } from './../first/first';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
        
     
  }


  goToFirst(){
    this.navCtrl.push(FirstPage);
  }

  goToHow(){

  this.navCtrl.push(HowpagePage)
  }

}
