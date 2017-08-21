import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { MyNewPage } from '../pages/my-new/my-new';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { NilaiPage } from '../pages/nilai/nilai';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyNewPage,
    HomePage,
    ListPage,
    AboutPage,
    LoginPage,
    DashboardPage,
    MyProfilePage,
    NilaiPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyNewPage,
    HomePage,
    ListPage,
    AboutPage,
    LoginPage,
    DashboardPage,
    MyProfilePage,
    NilaiPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
