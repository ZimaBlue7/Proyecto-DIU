import { startTransition } from 'react';
import {
    ADD_PRODUCT_CAR,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    TOTAL_PRODUCTO
} from '../type';

const CarritoReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case ADD_PRODUCT_CAR:
            return {
                ...state,
                listProduct: [...state.listProduct,  {
                        id: payload.id,
                        id_proveedro: payload.id_proveedro,
                        id_user_add: payload.id_user_add,
                        nombre: payload.nombre,
                        precio: payload.precio,
                        estado: payload.estado,
                        categoria: payload.categoria,                        
                        descripcion: payload.descripcion,
                        image: payload.image,
                        cantidad: 1
                    }
                ]
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                listProduct: state.listProduct.map(item => {
                    if( item.id === payload.id ){
                        return payload
                    }
                    return item
                })
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                listProduct: state.listProduct.filter( item => item.id != payload )
            }
        case TOTAL_PRODUCTO:
            return {
                ...state,
                totalAPagar: payload
            }
        default:
            return state;
    }

}

export default CarritoReducer;