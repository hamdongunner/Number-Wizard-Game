import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
binaryNum: any[] =  ['000000','100000','010000','110000','001000','101000','011000','111000','000100','100100','010100','110100','001100',
                        '101100','011100','111100','000010','100010','010010','110010','001010','101010','011010','111010','000110','100110',
                        '010110','110110','001110','101110','011110','111110','000001','100001','010001','110001','001001','101001','111001',
                        '000101','100101','010101','110101','001101','101101','011101','111101','000011','100011','010011','110011','001011',
                        '101011','011011','111011','000111','100111','010111','110111','001111','101111','011111','111111'];
logicArray: any[] = [16,2,8,32,1,4];
firstArray: any[] =[];
secondArray: any[] =[];
thirdArray: any[] =[];
fourthArray: any[]=[];
fifthArray: any[] = [];
sixthArray: any[] =[];
i:any ;
view1: boolean;
view2: boolean;
view3: boolean;
view4: boolean;
view5: boolean;
view6: boolean;
view7: boolean;
btn1View: boolean;
btn2View: boolean;
btn3View: boolean;
counter:any;
result: any = "";

  constructor(public navCtrl: NavController) {

      this.view1 = true;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
      this.view7 = false;
      this.counter = 1;
      this.result = "";
      this.btn1View = true;
      this.btn2View = true;
      this.btn3View = false;
    
        for (this.i =0; this.i < this.binaryNum.length ; ++this.i ){
          if (this.binaryNum[this.i][0] == '1'){
              this.firstArray.push( this.binaryNum[this.i]);
          }
          if ( this.binaryNum[this.i][1] == '1'){
              this.secondArray.push( this.binaryNum[this.i]);
          }
             if ( this.binaryNum[this.i][2] == '1'){
              this.thirdArray.push( this.binaryNum[this.i]);
          }
            if ( this.binaryNum[this.i][3] == '1'){
              this.fourthArray.push( this.binaryNum[this.i]);
          }
            if ( this.binaryNum[this.i][4] == '1'){
              this.fifthArray.push( this.binaryNum[this.i]);
          }
             if ( this.binaryNum[this.i][5] == '1'){
                this.sixthArray.push( this.binaryNum[this.i]);
          }
        }

        for(this.i = 0; this.i < this.firstArray.length; this.i ++){
          this.firstArray[this.i] = this.firstArray[this.i][0] * this.logicArray[0] + this.firstArray[this.i][1] * this.logicArray[1] + this.firstArray[this.i][2] * this.logicArray[2] + this.firstArray[this.i][3] * this.logicArray[3] + this.firstArray[this.i][4] * this.logicArray[4] + this.firstArray[this.i][5] * this.logicArray[5];
        }
        for(this.i = 0; this.i < this.secondArray.length; this.i ++){
          this.secondArray[this.i] = this.secondArray[this.i][0] * this.logicArray[0] + this.secondArray[this.i][1] * this.logicArray[1] + this.secondArray[this.i][2] * this.logicArray[2] + this.secondArray[this.i][3] * this.logicArray[3] + this.secondArray[this.i][4] * this.logicArray[4] + this.secondArray[this.i][5] * this.logicArray[5];
        }
        for(this.i = 0; this.i < this.thirdArray.length; this.i ++){
          this.thirdArray[this.i] = this.thirdArray[this.i][0] * this.logicArray[0] + this.thirdArray[this.i][1] * this.logicArray[1] + this.thirdArray[this.i][2] * this.logicArray[2] + this.thirdArray[this.i][3] * this.logicArray[3] + this.thirdArray[this.i][4] * this.logicArray[4] + this.thirdArray[this.i][5] * this.logicArray[5];
        }
        for(this.i = 0; this.i < this.fourthArray.length; this.i ++){
          this.fourthArray[this.i] = this.fourthArray[this.i][0] * this.logicArray[0] + this.fourthArray[this.i][1] * this.logicArray[1] + this.fourthArray[this.i][2] * this.logicArray[2] + this.fourthArray[this.i][3] * this.logicArray[3] + this.fourthArray[this.i][4] * this.logicArray[4] + this.fourthArray[this.i][5] * this.logicArray[5];
        }
       for(this.i = 0; this.i < this.fifthArray.length; this.i ++){
          this.fifthArray[this.i] = this.fifthArray[this.i][0] * this.logicArray[0] + this.fifthArray[this.i][1] * this.logicArray[1] + this.fifthArray[this.i][2] * this.logicArray[2] + this.fifthArray[this.i][3] * this.logicArray[3] + this.fifthArray[this.i][4] * this.logicArray[4] + this.fifthArray[this.i][5] * this.logicArray[5];
        }
        for(this.i = 0; this.i < this.sixthArray.length; this.i ++){
          this.sixthArray[this.i] = this.sixthArray[this.i][0] * this.logicArray[0] + this.sixthArray[this.i][1] * this.logicArray[1] + this.sixthArray[this.i][2] * this.logicArray[2] + this.sixthArray[this.i][3] * this.logicArray[3] + this.sixthArray[this.i][4] * this.logicArray[4] + this.sixthArray[this.i][5] * this.logicArray[5];
        }
            this.firstArray.sort(function(a, b){return a-b});
            this.secondArray.sort(function(a, b){return a-b});
            this.thirdArray.sort(function(a, b){return a-b});
            this.fourthArray.sort(function(a, b){return a-b});
            this.fifthArray.sort(function(a, b){return a-b});
            this.sixthArray.sort(function(a, b){return a-b});
     
  }

yesBtn(){
  this.counter ++;
  switch(this.counter){

    case 2:
      this.view1 = false;
      this.view2 = true;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
      this.result = this.result + '1';
      break;
    
    case 3:
      this.view1 = false;
      this.view2 = false;
      this.view3 = true;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
      this.result = this.result + '1';
      break;
    
    case 4:
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = true;
      this.view5 = false;
      this.view6 = false;
      this.result = this.result + '1';
      break;
    
     case 5:
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = true;
      this.view6 = false;
      this.result = this.result + '1';
      break;
    
        case 6:
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = true;
      this.result = this.result + '1';
      break;
      case 7:
      this.result = this.result + '1';
      console.log(this.result);
        this.result = this.result[0] * this.logicArray[0] + this.result[1] * this.logicArray[1] + this.result[2] * this.logicArray[2] + this.result[3] * this.logicArray[3] + this.result[4] * this.logicArray[4] + this.result[5] * this.logicArray[5];
     console.log(this.result);
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
      this.view7 = true;
      this.btn1View = false;
      this.btn2View = false;
      this.btn3View = true;
      break;

    default:
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
      this.view7 = true;
    break;
  }
}

noBtn(){
 this.counter ++;
  switch(this.counter){

    case 2:
      this.view1 = false;
      this.view2 = true;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
      this.result = this.result + '0';      
      break;
    
    case 3:
      this.view1 = false;
      this.view2 = false;
      this.view3 = true;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
      this.result = this.result + '0';      
      break;
    
    case 4:
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = true;
      this.view5 = false;
      this.view6 = false;
      this.result = this.result + '0';      
      break;
    
     case 5:
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = true;
      this.view6 = false;
      this.result = this.result + '0';         
      break;
    
    case 6:
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = true;
      this.result = this.result + '0';            
      break;

      case 7:
        this.result = this.result + '0';
        console.log(this.result);
        this.result = this.result[0] * this.logicArray[0] + this.result[1] * this.logicArray[1] + this.result[2] * this.logicArray[2] + this.result[3] * this.logicArray[3] + this.result[4] * this.logicArray[4] + this.result[5] * this.logicArray[5];
        console.log(this.result);
        this.view1 = false;
        this.view2 = false;
        this.view3 = false;
        this.view4 = false;
        this.view5 = false;
        this.view6 = false;
        this.view7 = true;
        this.btn1View = false;
        this.btn2View = false;
        this.btn3View = true;
      break;

    default:
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
      this.view7 = true;
    break;
  }
}

resBtn(){
      this.view1 = true;
      this.view7 = false;
      this.counter = 1;
      this.result = "";
      this.btn1View = true;
      this.btn2View = true;
      this.btn3View = false; 
}

}
