import * as fa from './filter.actions';

const estadoInicial: fa.filtrosValidos = 'todos';

export function reducerFilter(state = estadoInicial, action: fa.acciones): fa.filtrosValidos {
    switch (action.type) {
        case fa.SET_FILTROS:
            return action.filtro;
        // case 'pendientes':
        //     return 'todos';
        default:
            return state;
    }
}
