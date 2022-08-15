import React, {useReducer} from 'react'
import axios from 'axios'

import UserAdminContext from './UserAdminContext'
import UserAdminReducer from './UserAdminReducer'

const UserAdminState = (props) => {
    const inicialState = {
        datos: {},
        userSelect: {},
        horarios: {},
        horarioSelect: {},
        estado: 'cargando'
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

    const deleteUser = async (id) => {
        try {
            const res = axios.delete('https://surcusalud.herokuapp.com/user/'+id);
            dispatch({
                type: 'DELETE_USER',
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async (id) => {
        try {
            const res = await axios.get('https://surcusalud.herokuapp.com/user/'+id);
            dispatch({
                type: 'GET_USER',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const createEmpleado = async (datos) => {
        try {
            const res = await axios.post('https://surcusalud.herokuapp.com/employee', datos);
            dispatch({
                type: 'ADD_EMPLOYEE',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getHorario = async () => {
        try {
            const res = await axios.get('');
            dispatch({
                type: 'GET_HORARIO',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const crearHorario = async (datos) => {
        try {
            const res = await axios.post('', datos);
            dispatch({
                type: 'ADD_HORARIO',
                payload: datos
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserAdminContext.Provider value={{
            datos: state.datos,
            userSelect: state.userSelect,
            horarios: state.horarios,
            horarioSelect: state.horarioSelect,
            getUsers,
            getUser,
            getHorario,
            deleteUser,
            createEmpleado,
            crearHorario
        }}>
            {props.children}
        </UserAdminContext.Provider>
    )
}

export default UserAdminState;