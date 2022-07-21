import React, {useReducer} from 'react'
import axios from 'axios'

import UserContext from './UserContext'
import UserReducer from './UserReducer'

const UserState = (props) => {
    const inicialState = {
    }

    const [state, dispatch] = useReducer(UserReducer, inicialState)

    return (
        <UserContext.Provider value={{
           
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState