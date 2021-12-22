import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { ScrollUpBtnComponent } from "./scroll-up-btn/scroll-up-btn.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { JobAppComponent } from './job-app/job-app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsNewComponent } from './about-us-new/about-us-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    AboutComponent,
    NavBarComponent,
    FooterComponent,
    ScrollUpBtnComponent,
    JobAppComponent,
    LoginComponent,
    AboutUsNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxUiLoaderRouterModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
