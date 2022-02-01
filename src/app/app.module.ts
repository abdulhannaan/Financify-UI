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
import { LoginComponent } from './login/login.component';
import { MainImageComponent } from './components/main-image/main-image.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ServicesTextAreaComponent } from './components/services-text-area/services-text-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { PricingtableComponent } from './components/pricing-table/pricing-table.component';
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
    LoginComponent,
    MainImageComponent,
    ContactFormComponent,
    ServicesTextAreaComponent,UploadComponent,PricingtableComponent,PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
