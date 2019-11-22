import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {
  findWidgetsForTopic = topicId =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/topics/${topicId}/widgets`)
      .then(response => response.json())


  findAllWidgets = () =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/widgets`)
      .then(response => response.json)
    
  findWidgetById = widgetId =>
      fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/widgets/${widgetId}`)
          .then(response => response.json)
}
