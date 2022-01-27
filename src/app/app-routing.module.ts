import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AdministrationComponent } from './pages/services/administration/administration.component';
import { LonHRComponent } from './pages/services/lon-hr/lon-hr.component';
import { RedovisningComponent } from './pages/services/redovisning/redovisning.component';
import { ServicesComponent } from './pages/services/services.component';
import { UmbrellaUnemploymentComponent } from './pages/services/umbrella-unemployment/umbrella-unemployment.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "career", component: CareerComponent },
  { path: "services", component: ServicesComponent },
  { path: "administration", component: AdministrationComponent },
  { path: "lon-hr", component: LonHRComponent },
  { path: "Redovisning", component: RedovisningComponent },
  { path: "Umbrella-Unemployment", component: UmbrellaUnemploymentComponent },
  { path: "login", component: LoginComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
