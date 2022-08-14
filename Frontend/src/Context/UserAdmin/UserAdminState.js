import React, {useReducer} from 'react'
import axios from 'axios'

import UserAdminContext from './UserAdminContext'
import UserAdminReducer from './UserAdminReducer'

const UserAdminState = (props) => {
    const inicialState = {
        datos: {}
    }

    const [state, dispatch] = useReducer(UserAdminReducer, inicialState)

    const getUsers = async () => {
        try {
            const res = await axios.get("https://surcusalud.herokuapp.com/users");
            dispatch({
                type: 'OBTENER_USERS',
                payload: res.data
            })
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

    return (
        <UserAdminContext.Provider value={{
            datos: state.datos,
            getUsers
        }}>
            {props.children}
        </UserAdminContext.Provider>
    )
}

export default UserAdminState;