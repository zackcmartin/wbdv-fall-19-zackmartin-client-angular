import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../services/ModuleService';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  modules = []
  selectedModule = {
    lessons: []
  }
  selectedLesson = {
    topics: []
  }

  constructor(private moduleService: ModuleService) { }

  ngOnInit() {
    this.moduleService.findAllModules()
    .then(modules => this.modules = modules);
  }

selectModule = module =>
  this.selectedModule = module

selectLesson = lesson =>
  this.selectedLesson = lesson

}
