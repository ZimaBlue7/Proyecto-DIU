import {
    ADD_PRODUCT_CAR
} from '../type';

const CarritoReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case ADD_PRODUCT_CAR:
            return {
                ...state,
                listProduct: payload
            }
        default:
            return state;
    }

}

export default CarritoReducer;