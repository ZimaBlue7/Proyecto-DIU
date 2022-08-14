import {
    VALIDAR_USUARIO,
    REGISTRAR_USUARIO,
    ERROR_VALIDAION,
    OBTENER_USERS
} from '../type';

const UserAdminReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case OBTENER_USERS:
           return {
                ...state,
                datos: payload
            } 
        default:
            return state;
    }

}

export default UserAdminReducer;