import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from "./dashboard.component";
import { NotFoundComponent } from './not-found/not-found.component';

const components = [NavBarComponent, SideBarComponent, MainDashboardComponent,DashboardComponent];
const modules = [DashboardRoutingModule]

@NgModule({
  declarations: [...components, NotFoundComponent],
  imports: [...modules],
  exports:[...components,...modules],
  providers: [],
})
export class DashboardModule {}
