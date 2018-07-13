import { Pipe, PipeTransform } from '@angular/core';
import * as fa from './filter.actions';
import { ToDo } from '../todo/model/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: ToDo[], filtro: fa.filtrosValidos): any {
      switch (filtro) {
      case 'completados':
        return todos.filter(t => t.estado);
      case 'pendientes':
        return todos.filter(t => !t.estado);
      default:
        return todos;
    }
  }


}
