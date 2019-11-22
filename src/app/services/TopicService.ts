import {Injectable} from '@angular/core';

@Injectable()
export class TopicService {
  findTopicsForLesson = lessonId =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/lessons/${lessonId}/topics`)
      .then(response => response.json())


findAllTopics = () =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/topics`)
        .then(response => response.json)
  
findTopicById = topicId =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/topics/${topicId}`)
        .then(response => response.json)

}
