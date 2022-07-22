import React, {useReducer} from 'react'
import axios from 'axios'

import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'

const ProductState = (props) => {
    const inicialState = {
    }

    const [state, dispatch] = useReducer(ProductReducer, inicialState)

    return (
        <ProductContext.Provider value={{
           
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;