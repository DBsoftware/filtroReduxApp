import { Action } from '@ngrx/store';
export const ADD_TODO = '[ToDo] ADD_toDo';
export const TOGGLE_TODO = '[ToDo] TOGGLE_toDo';
export const TOGGLE_ALL_TODO = '[ToDo] TOGGLE_all_toDo';
export const EDIT_TODO = '[ToDo] EDIT_toDo';
export const DELETE_TODO = '[ToDo] DELETE_toDo';
export const DELETE_ALL_TODO = '[ToDo] DELETE_all_toDo';

export class AddToDOAction implements Action {
    readonly type = ADD_TODO;
    constructor(public texto: string) { }
}
export class ToggleToDOAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}
export class ToggleAllToDOAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public estado: boolean) { }
}
export class EditToDOAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public texto: string) { }
}
export class DeleteToDOAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) { }
}
export class DeleteALLToDOAction implements Action {
    readonly type = DELETE_ALL_TODO;
    constructor() { }
}

export type Acciones = DeleteALLToDOAction|AddToDOAction|ToggleAllToDOAction|ToggleToDOAction|EditToDOAction|DeleteToDOAction;
