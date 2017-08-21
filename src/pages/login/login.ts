import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  dashboardPage = DashboardPage;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
