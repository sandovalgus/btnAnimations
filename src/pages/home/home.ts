import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
voiceStatus:number; // 0= sin accion, 1= comienza a grabar, 2= pause | btn opciones
className: string = 'one-class';
  constructor(public navCtrl: NavController) {
    this.voiceStatus=0;
  }

  btnVoice(){
    console.log("touch !!");
    this.className = 'one-class';
    this.voiceStatus = 2;
    
  }

  btnVerVoice(){
    this.className = 'another-class';
  }

  goPage(){
    this.navCtrl.push("Page2Page");
  }
}
 