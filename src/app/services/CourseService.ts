import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch('https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses')
      .then(response => response.json())

  findCourseById = courseId =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${courseId}`)
    .then(response => response.json)

}