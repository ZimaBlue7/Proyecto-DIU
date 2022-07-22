import React, {useReducer} from 'react'
import axios from 'axios'

import UserContext from './UserContext'
import UserReducer from './UserReducer'
import { getBottomNavigationUtilityClass } from '@mui/material'

const UserState = (props) => {
    const inicialState = {
        datosUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, inicialState)

    const validarUsuario = async (datos) => {
        try {

            const res = await axios.post('http://localhost:3000/autenticarUser/', datos );
            
            dispatch({
                type: 'VALIDAR_USUARIO',
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
    }

    const registrarUsuario = async (datos) => {
        try {
            const res = await axios.post('http://localhost:3000/user', datos);
            console.log(res)
            dispatch({
                type: 'REGISTRAR_USUARIO',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{
            datosUser: state.datosUser,
            validarUsuario,
            registrarUsuario
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;