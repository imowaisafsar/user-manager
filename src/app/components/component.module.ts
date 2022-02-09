import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PublicNavComponent } from './public-nav/public-nav.component';
import { PrivateNavComponent } from './private-nav/private-nav.component';
import { ComponentRoutingModule } from './component-routing.module';
import { CardModule as PngCardModule } from 'primeng/card';
import { ButtonModule as PngButtonModule } from 'primeng/button';
import { InputTextModule as PngInputTextModule } from 'primeng/inputtext';
import { PasswordModule as PngPasswordModule } from 'primeng/password';
import { MessagesModule as PngMessagesModule } from 'primeng/messages';
import { MessageModule as PngMessageModule } from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import firebase module
import { environment } from '../../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    PngCardModule,
    PngButtonModule,
    PngInputTextModule,
    PngPasswordModule,
    PngMessagesModule,
    PngMessageModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    PublicNavComponent,
    PrivateNavComponent,
    DashboardComponent
  ],
  providers: [],
  exports: [
    LoginComponent,
    SignupComponent,
    PublicNavComponent,
    FormsModule,
    PrivateNavComponent
  ],
  bootstrap: [
    LoginComponent,
    SignupComponent,
    PublicNavComponent,
    PrivateNavComponent
  ]
})
export class ComponentModule { }
