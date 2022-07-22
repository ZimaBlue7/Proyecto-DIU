import React, {useReducer} from 'react'
import axios from 'axios'

import CarritoContext from './CarritoContext'
import CarritoReducer from './CarritoReducer'

const CarritoState = (props) => {
    const inicialState = {
    }

    const [state, dispatch] = useReducer(CarritoReducer, inicialState)

    return (
        <CarritoContext.Provider value={{
           
        }}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoState;