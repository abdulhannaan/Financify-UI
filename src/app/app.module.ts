import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

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
import { MainImageComponent } from './components/main-image/main-image.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ServicesTextAreaComponent } from './components/services-text-area/services-text-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UploadComponent } from './upload/upload.component';
import { PricingtableComponent } from './components/pricing-table/pricing-table.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { EnvService } from './App-services/Common/envoirment.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CaptchaComponent } from './captcha/captcha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    MainImageComponent,
    ContactFormComponent,
    ServicesTextAreaComponent,
    UploadComponent,
    PricingtableComponent,
    PricingComponent,
    CaptchaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [EnvService],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
