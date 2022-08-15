import {
    GET_TIENDA,
    UPDATE_TIENDA,
    ADD_RED_SOCIAL,
    ADD_CORREO,
    ADD_TELEFONO
} from '../type';

const StoreReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_TIENDA:
            return {
                ...state,
                infoTienda: payload ? payload.tienda : {},
                redesSociales: payload ? payload.redesSociales : {},
                correos: payload ? payload.telefonos : {},
                telefonos: payload ? payload.correos : {},
            }
        default:
            return state;
    }

}

export default StoreReducer;