import React, {useReducer} from 'react'
import axios from 'axios'

import StoreContext from './StoreContext'
import StoreReducer from './StoreReducer'

const StoreState = (props) => {
    const inicialState = {
        infoTienda: {},
        redesSociales: {},
        correos: {},
        telefonos: {},
    }

    const [state, dispatch] = useReducer(StoreReducer, inicialState)

    const getInfoTienda = async () => {
        try {
            const res = await axios.get('https://surcusalud.herokuapp.com/store');
            console.log(res.data)
            dispatch({
                type: 'GET_TIENDA',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateInfoTienda = async (datos) => {
        try {
            const res = await axios.put('', datos);
            dispatch({
                type: 'UPDATE_TIENDA',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addRedSocial = async (datos) => {
        try {
            const res = await axios.post('', datos);
            dispatch({
                type: 'ADD_RED_SOCIAL',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addCorreo = async (datos) => {
        try {
            const res = await axios.post('', datos);
            dispatch({
                type: 'ADD_CORREO',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addTelefono = async (datos) => {
        try {
            const res = await axios.post('', datos);
            dispatch({
                type: 'ADD_TELEFONO',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StoreContext.Provider value={{
            infoTienda: state.infoTienda,
            redesSociales: state.redesSociales,
            correos: state.correos,
            telefonos: state.telefonos,
            getInfoTienda,
            updateInfoTienda,
            addRedSocial,
            addCorreo,
            addTelefono
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState;