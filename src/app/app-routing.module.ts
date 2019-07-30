import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent },
  {path: 'about_me',component: AboutmeComponent },
  {path: 'resume',component: ResumeComponent },
  {path: 'projects',component: ProjectsComponent },
  {path: 'contact',component: ContactComponent },
  {path: "**", redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
