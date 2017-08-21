import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyProfilePage } from '../my-profile/my-profile';
import { NilaiPage } from '../nilai/nilai';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  myprofilePage=MyProfilePage;
  nilaiPage=NilaiPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  	this.navCtrl;
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  slides = [
    {
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-1.png",
    },
    {
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-2.png",
    },
    {
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-3.png",
    }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
