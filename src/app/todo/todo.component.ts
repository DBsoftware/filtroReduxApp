import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as t from './todos-list/todo.actions';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completado = false;
  constructor( public store: Store<AppState> ) { }

  ngOnInit() {
  }

  toggle() {
    this.completado = !this.completado;
    this.store.dispatch( new t.ToggleAllToDOAction(this.completado) );
  }

}
