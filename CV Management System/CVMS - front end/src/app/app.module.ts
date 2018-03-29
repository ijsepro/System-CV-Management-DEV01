import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginPopComponent } from './login-pop/login-pop.component';
import { RegPopComponent } from './reg-pop/reg-pop.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginPopComponent,
    RegPopComponent,
    FooterComponent,
    CarouselComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
