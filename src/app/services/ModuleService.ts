import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findAllModules = () =>
    fetch('https://wbdv-f19-zmartin-java-server.herokuapp.com/api/modules')
      .then(response => response.json())

  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${courseId}/modules`)
      .then(response => response.json())

  findModuleById = (moduleId) =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/modules/${moduleId}`)
      .then(response => response.json())
}
