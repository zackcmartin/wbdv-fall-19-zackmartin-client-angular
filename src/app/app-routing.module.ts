import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component'


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'courses', component: CourseGridComponent},
  {path: 'admin-users', component: AdminUsersComponent},
  { path: 'courses/:cid', component: CourseViewerComponent },
  { path: 'courses/:cid/modules/:mid', component: CourseViewerComponent },
  { path: 'courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent },
  { path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid', component: CourseViewerComponent },
  { path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets/:wid', component: CourseViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
