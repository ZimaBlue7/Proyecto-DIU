import React, {useReducer} from 'react'
import axios from 'axios'

import UserContext from './UserContext'
import UserReducer from './UserReducer'
import { getBottomNavigationUtilityClass } from '@mui/material'

const UserState = (props) => {
    const inicialState = {
        datosUser: 'cargando'
    }

    const [state, dispatch] = useReducer(UserReducer, inicialState)

    const validarUsuario = async (datos) => {
        try {

            /*const res = await axios.post('https://surcusalud.herokuapp.com/autenticarUser/', datos );
            console.log(res.data)*/
            dispatch({
                type: 'VALIDAR_USUARIO',
                payload: datos
            })

            //window.localStorage.setItem('sucur-salud-proyect-diu-login', JSON.stringify(res.data))

        } catch (error) {
            dispatch({
                type: 'ERROR_VALIDAION',
                payload: 'error'
            })
            console.log(error)
        }
    }

    const registrarUsuario = async (datos) => {
        try {
            /*console.log(datos)
            const res = await axios.post('https://surcusalud.herokuapp.com/user/', datos);
            console.log(res)*/
            dispatch({
                type: 'REGISTRAR_USUARIO',
                payload: datos
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