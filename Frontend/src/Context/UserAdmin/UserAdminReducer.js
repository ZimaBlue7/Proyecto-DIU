import {
    ERROR_VALIDAION,
    OBTENER_USERS,
    DELETE_USER,
    GET_USER,
    ADD_EMPLOYEE,
    ADD_HORARIO,
    GET_HORARIO
} from '../type';

const UserAdminReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case ERROR_VALIDAION:
           return {
                ...state,
                estado: payload
            } 
        case OBTENER_USERS:
           return {
                ...state,
                datos: payload
            } 
        case DELETE_USER:
           return {
                ...state,
                datos: state.datos.filter( dato => dato.id !== payload )
            } 
        case GET_USER:
           return {
                ...state,
                userSelect: payload
            } 
        case ADD_EMPLOYEE:
           return {
                ...state,
                datos: payload && payload.datos_user 
                        ? payload.datos_user.length > 0
                            ? [...state.datos, payload.datos_user[0]]
                            : [...state.datos]
                        : [...state.datos]
            } 
        case ADD_HORARIO:
           return {
                ...state,
                horarios: [...state.horarios, payload]
            } 
        case GET_HORARIO:
           return {
                ...state,
                horarioSelect: payload
            }
        default:
            return state;
    }

}

export default UserAdminReducer;