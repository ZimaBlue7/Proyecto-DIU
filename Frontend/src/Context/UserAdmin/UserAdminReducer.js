import {
    VALIDAR_USUARIO,
    REGISTRAR_USUARIO,
    ERROR_VALIDAION
} from '../type';

const UserAdminReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case VALIDAR_USUARIO:
            return {
                ...state,
                datosUser: payload
            }
        case REGISTRAR_USUARIO:
            return {
                ...state,
                datosUser: payload
            }
        case ERROR_VALIDAION:
           return {
                ...state,
                datosUser: payload
           } 
        default:
            return state;
    }

}

export default UserAdminReducer;