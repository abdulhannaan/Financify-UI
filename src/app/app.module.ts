import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { RedovisningComponent } from './pages/services/redovisning/redovisning.component';
import { AdministrationComponent } from './pages/services/administration/administration.component';
import { LonHRComponent } from './pages/services/lon-hr/lon-hr.component';
import { UmbrellaUnemploymentComponent } from './pages/services/umbrella-unemployment/umbrella-unemployment.component';
import { CareerComponent } from './pages/career/career.component';
import { PricingComponent } from './pages/pricing/pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    
    PortfolioComponent,
         ContactUsComponent,
         ServicesComponent,
         RedovisningComponent,
         AdministrationComponent,
         LonHRComponent,
         UmbrellaUnemploymentComponent,
         CareerComponent,
         PricingComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
