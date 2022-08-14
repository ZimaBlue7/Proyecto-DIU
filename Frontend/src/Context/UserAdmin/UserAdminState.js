import React, {useReducer} from 'react'
import axios from 'axios'

import UserAdminContext from './UserAdminContext'
import UserAdminReducer from './UserAdminReducer'

const UserAdminState = (props) => {
    const inicialState = {
        userLoginDatya: {},
        datos: {}
    }

    const [state, dispatch] = useReducer(UserAdminReducer, inicialState)

    const getUsers = async () => {
        try {
            const res = await axios.get("https://surcusalud.herokuapp.com/users");
        } catch (error) {
            console.log(error)
        }
    }

    const getUser = async (id) => {
        try {
            const res = await axios.get(''+id);
            
        } catch (error) {
            console.log(error);
        }
    }

    const createEmpleado = async (datos) => {
        try {
            const res = await axios.post('', datos);
        } catch (error) {
            console.log(error);
        }
    }

    const crearHorario = async (datos) => {
        try {
            const res = await axios.post('', datos);
        } catch (error) {
            console.log(error);
        }
    }
    
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

    return (
        <UserAdminContext.Provider value={{
            datosUser: state.datosUser,
            validarUsuario,
            getUsers
        }}>
            {props.children}
        </UserAdminContext.Provider>
    )
}

export default UserAdminState;