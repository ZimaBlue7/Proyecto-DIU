import {
    GET_PRODUCTS,
    GET_PRODUCT
} from '../type';

const ProductReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_PRODUCTS:
            return {
                ...state,
                listProduct: payload
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: payload
            }
        default:
            return state;
    }

}

export default ProductReducer;