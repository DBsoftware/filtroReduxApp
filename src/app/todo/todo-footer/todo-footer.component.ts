import { Component, OnInit } from '@angular/core';
import * as fa from '../../filter/filter.actions';
import * as ta from '../todos-list/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToDo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  pendiente: number;
filtrosValidos: fa.filtrosValidos[] = ['todos', 'pendientes', 'completados'];
filtroActual: fa.filtrosValidos;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(r => {
      this.contarPendientes(r.todos);
      this.filtroActual = r.filtro;
    });
  }

  cambiarFiltro(f: fa.filtrosValidos) {
    this.store.dispatch( new fa.SetActionFiltro(f));
  }

  contarPendientes(todos: ToDo[]) {
    this.pendiente = todos.filter(t => !t.estado).length;
  }

  borrar() {
    this.store.dispatch(new ta.DeleteALLToDOAction());
  }
}
