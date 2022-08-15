import React, {useReducer} from 'react'
import axios from 'axios'

import SedeContext from './SedeContext'
import SedeReducer from './SedeReducer'

const SedeState = (props) => {
    const inicialState = {
        sedes: [],
        sede: {},
        tareas: [],
        tarea: {},
        inventarios: [],
        inventario: {}
    }

    const [state, dispatch] = useReducer(SedeReducer, inicialState)

    const getSedes = async () => {
        try {
            const res = await axios.get('');
            dispatch({
                type: 'GET_SEDES',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getSede = async (id) => {
        try {
            const res = await axios.get(''+id);
            dispatch({
                type: 'GET_SEDE',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addSede = async (datos) => {
        try {
            const res = await axios.post('', datos);
            dispatch({
                type: 'ADD_SEDE',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateSede = async (id, datos) => {
        try {
            const res = await axios.put(''+id, datos);
            dispatch({
                type: 'UPDATE_SEDE',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteSede = async (id) => {
        try {
            const res = await axios.delete(''+id)
            dispatch({
                type: 'DELETE_SEDE',
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getTasks = async () => {
        try {
            const res = await axios.get('');
            dispatch({
                type: 'GET_TASKS',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getTask = async (id) => {
        try {
            const res = await axios.get(''+id)
            dispatch({
                type: 'GET_TASK',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addTask = async (datos) => {
        try {
            const res = await axios.post('', datos)
            dispatch({
                type: 'ADD_TASK',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(''+id)
            dispatch({
                type: 'DELETE_TASK',
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (id, datos) => {
        try {
            const res = await axios.put(''+id, datos)
            dispatch({
                type: 'UPDATE_TASK',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getInventarios = async () => {
        try {
            const res = await axios.get('');
            dispatch({
                type: 'GET_INVENTARIOS',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getInventario = async (id) => {
        try {
            const res = await axios.get(''+id)
            dispatch({
                type: 'GET_INVENTARIO',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addInventario = async (datos) => {
        try {
            const res = await axios.post('', datos)
            dispatch({
                type: 'ADD_INVENTARIO',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteInventario = async (id) => {
        try {
            const res = await axios.delete(''+id)
            dispatch({
                type: 'DELETE_INVENTARIO',
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateInventario = async (id, datos) => {
        try {
            const res = await axios.put(''+id, datos)
            dispatch({
                type: 'UPDATE_INVENTARIO',
                payload: datos
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SedeContext.Provider value={{
            sede: state.sede,
            sedes: state.sedes,
            tareas: state.tareas,
            tarea: state.tarea,
            inventarios: state.inventarios,
            inventario: state.inventario,
            getSede,
            getSedes,
            getTask,
            getTasks,
            getInventario,
            getInventarios,
            addSede,
            addTask,
            addInventario,
            updateSede,
            updateTask,
            updateInventario,
            deleteSede,
            deleteTask,
            deleteInventario
        }}>
            {props.children}
        </SedeContext.Provider>
    )
}

export default SedeState;