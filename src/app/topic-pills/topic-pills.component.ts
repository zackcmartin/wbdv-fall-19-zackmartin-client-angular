import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TopicService } from "../services/TopicService";

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private service: TopicService) { }

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  topics = []

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
      this.lessonId = params['lid'];
      this.topicId = params['tid'];
      this.service.findTopicsForLesson(this.lessonId)
        .then(topics => this.topics = topics)
    })
  }

}
