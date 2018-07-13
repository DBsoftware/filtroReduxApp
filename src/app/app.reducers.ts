import { ToDo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as tr from './todo/todo.reducer';
import * as fr from './filter/filter.reducer';
import * as fa from './filter/filter.actions';

export interface AppState {
        todos: ToDo[];
        filtro: fa.filtrosValidos;
}


export const appReducers: ActionReducerMap<AppState> = {
        todos: tr.reducerToDo,
        filtro: fr.reducerFilter
};