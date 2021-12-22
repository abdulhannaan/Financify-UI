import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsNewComponent } from "./about-us-new/about-us-new.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { JobAppComponent } from "./job-app/job-app.component";
import { LoginComponent } from "./login/login.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "contact-us", component: ContactComponent },
  { path: "job-app", component: JobAppComponent },
  { path: "app-login", component: LoginComponent },
  { path: "about-us-new", component: AboutUsNewComponent },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
