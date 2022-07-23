import React, {useReducer} from 'react'
import axios from 'axios'

import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'

const ProductState = (props) => {
    const inicialState = {
        listProduct: [],
        product: {}
    }

    const [state, dispatch] = useReducer(ProductReducer, inicialState)


    const getProduct = async () => {
        try {
            const res = await axios.get("https://my-json-server.typicode.com/JohanDavidPortocarrero/filejson/productosSurcusalud");
            
            dispatch({
                type: 'GET_PRODUCT',
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
    }

    const getProductUnd = async (id) => {
        try {

            const res = await axios.get("https://my-json-server.typicode.com/JohanDavidPortocarrero/filejson/productosSurcusalud/"+id);
            
            dispatch({
                type: 'GET_PRODUCT',
                payload: res.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductContext.Provider value={{
            listProduct: state.listProduct,
            product: state.product,
            getProduct,
            getProductUnd
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;