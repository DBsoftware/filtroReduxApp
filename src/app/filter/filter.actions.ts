import { Action } from '@ngrx/store';
export const SET_FILTROS = '[Filter] set filtro';
export type filtrosValidos = 'todos'| 'completados'|'pendientes';

export class SetActionFiltro implements Action {
    readonly type = SET_FILTROS;
    constructor(public filtro: filtrosValidos) {}
}

export type acciones = SetActionFiltro;
