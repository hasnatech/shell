import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { PageComponent } from './course/page/page.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "course/:id",
    component:CourseComponent
  }
  ,
  {
    path: "course/:id/page/:page_id",
    component:PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
