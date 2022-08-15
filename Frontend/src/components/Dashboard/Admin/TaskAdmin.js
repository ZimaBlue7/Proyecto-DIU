import React, { useState } from 'react'

import '../../../Styles/Dashboard/taskAdmin.css'

export default function TaskAdmin() {

    const [toggleTaskSinAsing, setToggleTaskSinAsing] = useState(false);
    const [toggleTaskPendientes, setToggleTaskPendietes] = useState(false);
    const [toggleTaskRealizadas, setToggleTaskRealizadas] = useState(false);

    const setToggles = (type) => {
        if( type === 'toggleTaskSinAsing' ) {
            setToggleTaskSinAsing(!toggleTaskSinAsing);
        }
        else if( type === 'toggleTaskPendientes' ) {
            setToggleTaskPendietes(!toggleTaskPendientes);
        }
        else if( type === 'toggleTaskRealizadas' ) {
            setToggleTaskRealizadas(!toggleTaskRealizadas);
        }
    } 

  return (
    <div className='bodyTaskAdmin'>
        <div className='conResumenDatos'>
            <div className='contTareasRealizadas'>
                <p>0 Pendientes</p>
                <ion-icon name="warning-outline"></ion-icon>
            </div>
            <div className='contTareasPendientes'>
                <p>0 Sin asignar</p>
                <ion-icon name="warning-outline"></ion-icon>
            </div>
            <div className='contTareasSinAsignar'>
                <p>0 Asignadas</p>
                <ion-icon name="warning-outline"></ion-icon>
            </div>
        </div>
        <div className='contTask'>
            <div className={toggleTaskSinAsing ? 'contTaskSinAsignar active' : 'contTaskSinAsignar'}>
                <div className='contHeaderTask'>
                    <h5>Tareas sin asignar</h5>
                    <button onClick={() => {
                        setToggles('toggleTaskSinAsing')
                    }}>
                        {
                            toggleTaskSinAsing
                            ? <ion-icon name="caret-up-outline"></ion-icon>
                            : <ion-icon name="caret-down-outline"></ion-icon>
                        }
                    </button>
                </div>
                <div className='task'>
                    <div className='itemTask header'>
                        <p className='itemId'>ID</p>
                        <p className='itemNombre'>Titulo</p>
                        <p className='itemFechaCreacion'>Fecha</p>
                        <p className='itemAcciones'>Acciones</p>
                    </div>
                    <ItemTask />
                </div>
            </div>
            <div className={toggleTaskPendientes ? 'contTaskPendientes active' : 'contTaskPendientes'}>
                <div className='contHeaderTask'>
                    <h5>Tareas pendientes</h5>
                    <button onClick={() => {
                        setToggles('toggleTaskPendientes')
                    }}>
                        {
                            toggleTaskPendientes
                            ? <ion-icon name="caret-up-outline"></ion-icon>
                            : <ion-icon name="caret-down-outline"></ion-icon>
                        }
                    </button>
                </div>
                <div className='task'>
                    <div className='itemTask header'>
                        <p className='itemId'>ID</p>
                        <p className='itemNombre'>Titulo</p>
                        <p className='itemFechaCreacion'>Fecha</p>
                        <p className='itemAcciones'>Acciones</p>
                    </div>
                    <ItemTask />
                </div>
            </div>
            <div className={ toggleTaskRealizadas ? 'contTaskRealizadas active' : 'contTaskRealizadas'}>
                <div className='contHeaderTask'>
                    <h5>Tareas pendientes</h5>
                    <button onClick={() => {
                        setToggles('toggleTaskRealizadas')
                    }}>
                        {
                            toggleTaskRealizadas
                            ? <ion-icon name="caret-up-outline"></ion-icon>
                            : <ion-icon name="caret-down-outline"></ion-icon>
                        }
                    </button>
                </div>
                <div className='task'>
                    <div className='itemTask header'>
                        <p className='itemId'>ID</p>
                        <p className='itemNombre'>Titulo</p>
                        <p className='itemFechaCreacion'>Fecha</p>
                        <p className='itemAcciones'>Acciones</p>
                    </div>
                    <ItemTask />
                </div>
            </div>
        </div>
    </div>
  )
}

function ItemTask(props) {
    return <div className='itemTask'>
        <p className='itemId'>ID</p>
        <p className='itemNombre'>Titulo</p>
        <p className='itemFechaCreacion'>Fecha</p>
        <div className='itemAcciones'>
            <button>
                <ion-icon name="pencil-outline"></ion-icon>
            </button>
            <button>
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        </div>
    </div>
}