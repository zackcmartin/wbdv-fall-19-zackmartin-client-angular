import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModule = moduleId => 
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/modules/${moduleId}/lessons`)
      .then(response => response.json())

  findAllLessons = () =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/lessons`)
      .then(response => response.json)

  findLessonById = lessonId =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/lessons/${lessonId}`)
      .then(response => response.json)
}
