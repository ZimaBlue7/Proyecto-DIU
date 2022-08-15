import React, {useReducer} from 'react'
import axios from 'axios'

import UserContext from './UserContext'
import UserReducer from './UserReducer'

const UserState = (props) => {
    const inicialState = {
        datosUser: null,
        estado: 'cargando'
    }

    const [state, dispatch] = useReducer(UserReducer, inicialState)
    
    const validarUsuario = async (datos) => {
        try {

            console.log(datos)
            const res = await axios.post('https://surcusalud.herokuapp.com/autenticarUser/', datos );
            console.log(res.data)
            dispatch({
                type: 'VALIDAR_USUARIO',
                payload: res.data
            })

            //window.localStorage.setItem('sucur-salud-proyect-diu-login', JSON.stringify(res.data))

        } catch (error) {
            console.log(error.response.data)
        }
    }

    const registrarUsuario = async (datos) => {
        try {
            const res = await axios.post('https://surcusalud.herokuapp.com/user', datos);
            dispatch({
                type: 'REGISTRAR_USUARIO',
                payload: res.data
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const verificarLogin = async (datos) => {
        try {

            dispatch({
                type: 'VALIDAR_USUARIO',
                payload: datos
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const updateUsuario = async (id, datos) => {
        try {

            const res = await axios.put(''+id, datos);
            dispatch({
                type: 'UPDATE_USUARIO',
                payload: datos
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{
            datosUser: state.datosUser,
            estado: state.estado,
            validarUsuario,
            registrarUsuario,
            verificarLogin,
            updateUsuario
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;