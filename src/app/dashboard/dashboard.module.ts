import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { AuthService } from "src/app/App-services/AuthService/auth.service";
import { ConfigService } from "src/app/App-services/Common/config.service";
import { EnvService } from "src/app/App-services/Common/envoirment.service";
import { LoaderService } from "src/app/App-services/LoaderService/loader.service";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideBarComponent } from "./side-bar/sidebar.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    DashboardComponent,TopBarComponent, MainComponent, NotFoundComponent,SideBarComponent, NavBarComponent
  ],
  exports:[DashboardComponent,DashboardRoutingModule ,RouterModule,CommonModule],
  imports: [
    HttpClientModule,
    FormsModule,
    DashboardRoutingModule,
    RouterModule,
    CommonModule,ReactiveFormsModule,BrowserModule
  ],
  providers:[LoaderService,AuthService,ConfigService,NgxUiLoaderService,EnvService]
})

export class DashboardModule { }
export class NotificationModule { }
