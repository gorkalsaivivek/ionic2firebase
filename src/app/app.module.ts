import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import providers
import {AuthData} from '../providers/auth-data';
import {EventData} from '../providers/event-data';
import {ProfileData} from '../providers/profile-data';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {

  apiKey: "AIzaSyCRxwLDZ0ia9Dh7EQTR_ge4cwtIfPM9BwU",
    authDomain: "testfirebaseapp-e6513.firebaseapp.com",
    databaseURL: "https://testfirebaseapp-e6513.firebaseio.com",
    projectId: "testfirebaseapp-e6513",
    storageBucket: "testfirebaseapp-e6513.appspot.com",
    messagingSenderId: "537641630284"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    EventData,
    ProfileData
  ]
})
export class AppModule {}
