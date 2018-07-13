import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ToDo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as t from '../todos-list/todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;
  @ViewChild('txtI') txtInputFisico: ElementRef;
  txtInput: FormControl;
  chckField: FormControl;
  edit: boolean;

  constructor(public store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('todos').subscribe(() => {

    });
    this.txtInput =  new FormControl(this.todo.texto, Validators.required);
    this.chckField =  new FormControl(this.todo.estado);
    this.chckField.valueChanges.subscribe(() => {
      this.store.dispatch( new t.ToggleToDOAction(this.todo.id) );
    });
  }

  editar() {
    this.edit = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.edit = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    this.store.dispatch( new t.EditToDOAction(this.todo.id, this.txtInput.value) );

  }

  borrar() {
    this.store.dispatch( new t.DeleteToDOAction(this.todo.id) );
  }

}
