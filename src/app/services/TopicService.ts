import {Injectable} from '@angular/core';

@Injectable()
export class TopicService {
  findTopicsForLesson = lessonId =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
      .then(response => response.json())


findAllTopics = () =>
    fetch(`http://localhost:8080/api/topics`)
        .then(response => response.json)
  
findTopicById = topicId =>
    fetch(`http://localhost:8080/api/topics/${topicId}`)
        .then(response => response.json)

}
