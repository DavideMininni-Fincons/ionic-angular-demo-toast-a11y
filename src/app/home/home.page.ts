import {Component, OnInit} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public toastController: ToastController) {}

  ngOnInit() {
    setTimeout(() => this.presentToastWithOptions('polite'), 6000);
    setTimeout(() => this.presentToastWithOptions('assertive'), 3000);
  }

  async presentToastWithOptions(arialive: 'polite' | 'assertive' | 'off') {
    const toast = await this.toastController.create({
      header: `Toast header - ${arialive}`,
      message: 'Click to Close',
      position: 'top',
      duration: 0,
      htmlAttributes: { 'aria-live': arialive },
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });
    toast.present();
  }

}
