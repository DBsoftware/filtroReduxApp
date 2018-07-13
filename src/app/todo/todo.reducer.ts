import * as t from './todos-list/todo.actions';
import { ToDo } from './model/todo.model';

const initTodo: ToDo[] = [];

export function reducerToDo(state: ToDo[] = initTodo, accion: t.Acciones  ) {
    switch (accion.type) {
        case t.ADD_TODO:
            return [ ...state, new ToDo(accion.texto) ];
        case t.EDIT_TODO:
        return state.map(e => {
            return (e.id === accion.id) ?
            { ...e, texto: accion.texto} : e;
        });
        case t.TOGGLE_TODO:
            return state.map(e => {
                return (e.id === accion.id) ?
                { ...e, estado: !e.estado} : e;
            });
        case t.TOGGLE_ALL_TODO:
            return state.map(e => {
                return  { ...e, estado: !e.estado} ;
            });
        case t.DELETE_TODO:
            return state.filter(e => e.id !== accion.id);
        case t.DELETE_ALL_TODO:
            return state.filter(e => !e.estado );
        default:
            return state;
    }
}
