import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DerectivesComponent } from './derectives/derectives.component';

const routes: Routes = [{ path: 'home', component: HomeComponent},
                      { path: 'about',  component: AboutComponent},
                      {path: 'dashboard', component: DashboardComponent},
                      {path: 'data-binding', component: DataBindingComponent},
                      {path: 'derectives', component: DerectivesComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
