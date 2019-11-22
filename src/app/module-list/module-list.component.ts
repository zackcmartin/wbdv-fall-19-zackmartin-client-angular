import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ModuleService } from "../services/ModuleService";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: ModuleService) { }

  courseId = '';
  moduleId = '';
  modules = [];

  ngOnInit() {
    this.route.params.subscribe(
      params =>
      {
        this.courseId = params['cid']
        this.moduleId = params['mid']
        this.service.findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules)
      })
  }

}