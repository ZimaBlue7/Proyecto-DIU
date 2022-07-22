import React, {useReducer} from 'react'
import axios from 'axios'

import CarritoContext from './CarritoContext'
import CarritoReducer from './CarritoReducer'

const CarritoState = (props) => {
    const inicialState = {
        listProduct: []
    }

    const [state, dispatch] = useReducer(CarritoReducer, inicialState)

    const addProduct = (datos) => {
        try {
            
            dispatch({
                type: 'ADD_PRODUCT_CAR',
                payload: datos
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CarritoContext.Provider value={{
            listProduct: state.listProduct,
            addProduct
        }}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoState;