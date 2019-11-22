import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TopicService } from "../services/TopicService";
import { WidgetService } from '../services/WidgetService';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private service: WidgetService) { }

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  widgetId = '';
  widgets = []

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
      this.lessonId = params['lid'];
      this.topicId = params['tid'];
      this.widgetId = params['wid'];
      this.service.findWidgetsForTopic(this.topicId)
        .then(widgets => this.widgets = widgets)
    })
  }
}
