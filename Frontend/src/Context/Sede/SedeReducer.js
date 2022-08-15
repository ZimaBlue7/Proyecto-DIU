import {
    GET_SEDES,
    GET_SEDE,
    ADD_SEDE,
    DELETE_SEDE,
    UPDATE_SEDE,
    GET_TASKS,
    GET_TASK,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    GET_INVENTARIOS,
    GET_INVENTARIO,
    ADD_INVENTARIO,
    UPDATE_INVENTARIO,
    DELETE_INVENTARIO
} from '../type';

const SedeReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_SEDES:
            return {
                ...state,
                sedes: payload
            }
        case GET_SEDE:
            return {
                ...state,
                sede: payload
            }
        case ADD_SEDE:
            return {
                ...state,
                sedes: [...state.sedes, payload]
            }
        case UPDATE_SEDE:
            return {
                ...state,
                sedes: state.sedes.map( sede => {
                    if( sede.id === payload.id ){
                        return payload
                    }
                    return sede;
                } )
            }
        case DELETE_SEDE:
            return {
                ...state,
                sedes: state.sedes.filter( sede => sede.id !== payload  )
            }
        case GET_TASKS:
            return {
                ...state,
                tareas: payload
            }
        case GET_TASK:
            return {
                ...state,
                tarea: payload
            }
        case ADD_TASK:
            return {
                ...state,
                tareas: [...state.tareas, payload]
            }
        case UPDATE_TASK:
            return {
                ...state,
                tareas: state.tareas.map( tarea => {
                    if( tarea.id === payload.id ){
                        return payload
                    }
                    return tarea;
                } )
            }
        case DELETE_TASK:
            return {
                ...state,
                tareas: state.sedes.filter( tarea => tarea.ide !== payload )
            }
        case GET_INVENTARIOS:
            return {
                ...state,
                inventarios: payload
            }
        case GET_INVENTARIO:
            return {
                ...state,
                inventario: payload
            }
        case ADD_INVENTARIO:
            return {
                ...state,
                inventarios: [...state.inventarios, payload]
            }
        case UPDATE_INVENTARIO:
            return {
                ...state,
                inventarios: state.inventarios.map( inventario => {
                    if( inventario.id === payload.id ){
                        return payload
                    }
                    return inventario;
                } )
            }
        case DELETE_INVENTARIO:
            return {
                ...state,
                inventarios: state.inventarios.filter( inventario => inventario.ide !== payload )
            }
        default:
            return state;
    }

}

export default SedeReducer;