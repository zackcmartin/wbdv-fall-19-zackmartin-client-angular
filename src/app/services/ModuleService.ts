import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findAllModules = () =>
    fetch('http://localhost:8080/api/modules')
      .then(response => response.json())

  findModulesForCourse = (courseId) =>
    fetch(`http://localhost:8080/api/courses/${courseId}/modules`)
      .then(response => response.json())

  findModuleById = (moduleId) =>
    fetch(`http://localhost:8080/api/modules/${moduleId}`)
      .then(response => response.json())
}
