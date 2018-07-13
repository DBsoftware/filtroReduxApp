import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as t from '../todos-list/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput =  new FormControl('', Validators.required);
  }
  add_toDo() {
    if (this.txtInput.invalid) {
      return;
    }

    this.store.dispatch( new t.AddToDOAction(this.txtInput.value) );
    this.txtInput.setValue('');
  }

}
