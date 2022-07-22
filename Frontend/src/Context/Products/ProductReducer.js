import {
    GET_PRODUCT
} from '../type';

const ProductReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_PRODUCT:
            return {
                ...state,
                listProduct: payload
            }
        default:
            return state;
    }

}

export default ProductReducer;