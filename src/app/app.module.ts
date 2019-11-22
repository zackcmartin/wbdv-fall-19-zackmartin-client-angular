import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseService} from './services/CourseService';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/UserService';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ColumnNavigatorComponent } from './column-navigator/column-navigator.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleService } from './services/ModuleService';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { LessonService } from './services/LessonService';
import { WidgetService } from './services/WidgetService';
import { TopicService } from './services/TopicService';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminUsersComponent,
    CourseViewerComponent,
    ColumnNavigatorComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService,
    ModuleService,
    UserService,
    LessonService,
    TopicService,
    WidgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
