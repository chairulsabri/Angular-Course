import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { Project } from './project';

const routes: Routes = [
  {path: "Dashboard", component: DashboardComponent},
  {path: "About", component: AboutComponent},
  {path: "projects", component: Project},
  {path: "", redirectTo: "Dashboard", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
