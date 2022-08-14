import React, {useReducer} from 'react'
import axios from 'axios'

import CarritoContext from './CarritoContext'
import CarritoReducer from './CarritoReducer'

const CarritoState = (props) => {
    const inicialState = {
        listProduct: [],
        totalAPagar: 0
    }

    const [state, dispatch] = useReducer(CarritoReducer, inicialState)

    const addProduct = (datos) => {
        try {
            
            let list = state.listProduct.filter(item => item.id === datos.id )

            if( list.length === 0 ){
                dispatch({
                    type: 'ADD_PRODUCT_CAR',
                    payload: datos
                })
            }
            else{
                list[0].cantidad += 1;
                dispatch({
                    type: 'UPDATE_PRODUCT',
                    payload: list[0]
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const updateProduct = (datos) => {
        try {
            dispatch({
                type: 'UPDATE_PRODUCT',
                payload: datos
            })

        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = (id) => {
        try {
            
            dispatch({
                type: 'DELETE_PRODUCT',
                payload: id
            })

        }  catch (error) {
            console.log(error)
        }
    }

    const calcularTotal = () => {

        let total = 0;

        if( state.listProduct && state.listProduct.length > 0 ){
            state.listProduct.map( product => {
                total += product.precio * product.cantidad
            } )
        }

        dispatch({
            type: 'TOTAL_PRODUCTO',
            payload: total
        })
    }

    return (
        <CarritoContext.Provider value={{
            listProduct: state.listProduct,
            totalAPagar: state.totalAPagar,
            addProduct,
            updateProduct,
            deleteProduct,
            calcularTotal 
        }}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoState;