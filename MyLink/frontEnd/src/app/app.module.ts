import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavigationComponent } from './view/main-page/navigation/navigation.component';
import { LoginPopComponent } from './view/main-page/login-pop/login-pop.component';
import { RegPopComponent } from './view/main-page/reg-pop/reg-pop.component';
import { FooterComponent } from './view/main-page/footer/footer.component';
import { MainLayoutComponent } from './view/main-page/main-layout/main-layout.component';
import { SignService } from './services/sign.services';
import {HttpModule} from "@angular/http";
import { ContainerComponent } from './view/home-page/container/container.component';

@NgModule({
    declarations: [
    AppComponent,
    NavigationComponent,
    LoginPopComponent,
    RegPopComponent,
    FooterComponent,
    MainLayoutComponent,
    ContainerComponent
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
