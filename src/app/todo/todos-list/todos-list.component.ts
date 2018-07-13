import { Component, OnInit } from '@angular/core';
import { ToDo } from '../model/todo.model';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {
  toDos: ToDo[] = [];
  filtro: string;
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(r => {
      this.toDos = r.todos;
      this.filtro = r.filtro;
    });
  }

}
