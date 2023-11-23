import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"tarea-pwa-64913","appId":"1:190842821617:web:76a23b1a04c6842e6d4250","storageBucket":"tarea-pwa-64913.appspot.com","apiKey":"AIzaSyDw139SMT11JaRUJOuLcdIq02pfIPclZTE","authDomain":"tarea-pwa-64913.firebaseapp.com","messagingSenderId":"190842821617"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
