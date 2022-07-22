import React, {useReducer} from 'react'
import axios from 'axios'

import StoreContext from './StoreContext'
import StoreReducer from './StoreReducer'

const StoreState = (props) => {
    const inicialState = {
    }

    const [state, dispatch] = useReducer(StoreReducer, inicialState)

    return (
        <StoreContext.Provider value={{
           
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState;