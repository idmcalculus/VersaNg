import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WhyVersaComponent } from './why-versa/why-versa.component';
import { InvestmentStepsComponent } from './investment-steps/investment-steps.component';
import { VersaOffersComponent } from './versa-offers/versa-offers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    WhyVersaComponent,
    InvestmentStepsComponent,
    VersaOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
