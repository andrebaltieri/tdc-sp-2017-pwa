import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonDetailsPage } from '../pages/person-details/person-details';
import { AgendaPage } from '../pages/agenda/agenda';
import { LocationPage } from '../pages/location/location';
import { MessagePage } from '../pages/message/message';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonDetailsPage,
    AgendaPage,
    LocationPage,
    MessagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonDetailsPage,
    AgendaPage,
    LocationPage,
    MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
