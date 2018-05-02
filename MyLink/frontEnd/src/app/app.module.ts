import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavigationComponent } from './view/navigation/navigation.component';
import { LoginPopComponent } from './view/login-pop/login-pop.component';
import { RegPopComponent } from './view/reg-pop/reg-pop.component';
import { FooterComponent } from './view/footer/footer.component';
import { MainLayoutComponent } from './view/main-layout/main-layout.component';
import { SignService } from './services/sign.services';
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
    AppComponent,
    NavigationComponent,
    LoginPopComponent,
    RegPopComponent,
    FooterComponent,
    MainLayoutComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    SignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
