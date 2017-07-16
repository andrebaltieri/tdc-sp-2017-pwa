import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AgendaPage } from '../pages/agenda/agenda';
import { LocationPage } from '../pages/location/location';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild("content") content: NavController;
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToHome() {
    this.content.setRoot(HomePage);
  }

  goToAgenda() {
    this.content.setRoot(AgendaPage);
  }

  goToLocation() {
    this.content.setRoot(LocationPage);
  }
}

