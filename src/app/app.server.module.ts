import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [AppModule],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
