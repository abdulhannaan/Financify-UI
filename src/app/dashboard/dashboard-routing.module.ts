import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'main', component: MainComponent },
      { path: 'error', component: NotFoundComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

