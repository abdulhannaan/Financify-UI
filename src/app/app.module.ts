import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';

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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


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
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http : HttpClient)
{
  return new TranslateHttpLoader(http);
}
