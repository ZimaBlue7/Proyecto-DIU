require('dotenv').config();

const Users = require('../models/Users');
const Employees = require('../models/Employees')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schedule = require('../models/Schedule');

const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
        return res.json(users);
    } catch (error) {
        res.status(500).json({
            typeError: "Get Users",
            message: "Ha ocurrido un error obteniedo los usuarios",
            data: {},
            error: error
        });
    }
}

const getUser = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await Users.findByPk(id);

        if( user.rol === "employee" ){
            const employee = await Employees.findByPk(id);

            const data = {
                nombre: user.nombre,
                apellido: user.apellido,
                fecha_nacimiento: user.fecha_nacimiento,
                telefono: user.telefono,
                correo: user.correo,
                avatar: user.avatar,
                cargo: employee.cargo,
                sede: employee.sede,
                rol: user.rol
            }

            res.json(data);
        }
        else{
            res.json(user);
        }
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get User",
            message: "Ha ocurrido un error obteniedo el usuario",
            data: {},
            error: error
        });
    }
}

const getEmployees = async (req, res) => {
    try {

        const employees = await Employees.findAll();
        const users = await Users.findAll({
            where: {
                   rol: "employee"
            }
        });

        let employeesData = [];

        users.forEach(user => {
            employees.forEach( emp => {
                if( user.id === emp.id ){
                        employeesData.push({
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        fecha_nacimiento: user.fecha_nacimiento,
                        telefono: user.telefono,
                        correo: user.correo,
                        avatar: user.avatar,
                        rol: user.rol,
                        cargo: emp.cargo,
                        sede: emp.sede
                    })
                }
                    
            } )
        });

        res.json(employeesData);
        

    } catch (error) {
        res.status(500).json({
            typeError: "Get Employees",
            message: "Ha ocurrido un error obteniedo a los empleados",
            data: {},
            error: error
        });
    }
}

const getSchedule = async (req, res) => {
    try {

        const {id} = req.params;
        
        const horarios = await Schedule.findAll({
            where:{
                id_user: id
            }
        })

        res.json(horarios);

        
    } catch (error) {
        res.status(500).json({
            typeError: "Get Schedule",
            message: "Ha ocurrido un error obteniedo los horarios",
            data: {},
            error: error
        });
    }
}

const addEmpleado = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            fecha_nacimiento,
            telefono,
            correo,
            password,
            cargo,
            sede
        } = req.body;
        
        const passwordEncript =  await bcrypt.hash(password, 10);
        const user = await Users.create({
            nombre: nombre,
            apellido: apellido,
            fecha_nacimiento: fecha_nacimiento,
            telefono: telefono,
            correo: correo,
            password: passwordEncript,
            avatar: 1,
            rol: "employee"
        })

        const employees = await Employees.create({
            id: user.id,
            cargo: cargo,
            sede: sede
        });

        res.json({
            mjs: "Usuario creado",
            datos_user: [
                user,
                employees
            ]
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Get Employees",
            message: "Ha ocurrido un error obteniedo a los empleados",
            data: {},
            error: error
        });
    }
}

const createUser = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            fecha_nacimiento,
            telefono,
            correo,
            password
        } = req.body;

        const passwordEncript = await bcrypt.hash(password, 5);
        const user = await Users.create({
            nombre: nombre,
            apellido: apellido,
            fecha_nacimiento: fecha_nacimiento,
            telefono: telefono,
            correo: correo,
            password: passwordEncript,
            avatar: 1,
            rol: "client"
        })

        res.json({
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            telefono: user.telefono,
            correo: user.correo,
            rol: user.rol
        });

    } catch (error) {
        res.status(500).json({
            typeError: "Create User",
            message: "Ha ocurrido un error creando el usuario",
            data: {},
            error: error
        });
    }
}

const addSchedule = async (req, res) => {
    try {

        const {
            id_user,
            hora_inicio,
            hora_fin,
            fecha
        } = require.body;

        const horario = await Schedule.create({
            id_user,
            hora_inicio,
            hora_fin,
            fecha
        })

        res,json({
            message: "Horario agreagdo con exito",
            horario: horario
        });
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get Schedule",
            message: "Ha ocurrido un error obteniedo los horarios",
            data: {},
            error: error
        });
    }
}

const updateUser = async (req, res) => {
    try {

        const {id} = req.params;
        const {
            nombre,
            apellido,
            telefono,
        } = req.body

        const user = await Users.findByPk(id);

        user.update({
            nombre,
            apellido,
            telefono,
        })

        res.json({
            mgs: "Usuario actualizado",
            user: user
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Update User",
            message: "Ha ocurrido un error actualizando el usuario",
            data: {},
            error: error
        });
    }
}

const updateEmployees = async (req, res) => {
    try {
        
        const {id} = req.params;
        const {
            cargo,
            sede
        } = req.body;

        const employee = await Employees.findByPk(id);

        employee.update({
            cargo,
            sede
        })

        res.json({
            mgs: "Empleado actualizado",
            data: employee
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Update employee",
            message: "Ha ocurrido un error actualizando el empleado",
            data: {},
            error: error
        });
    }
}

const updateSchedule = async (req, res) => {
    try {
        
        const {id} = req.params;
        const {
            id_user,
            hora_inicio,
            hora_fin,
            fecha
        } = require.body;

        const horario = await Schedule.findByPk(id);

        horario.update({
            id_user,
            hora_inicio,
            hora_fin,
            fecha
        })

        res.json({
            mgs: "horario actualizado",
            horario: horario
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Update schedule",
            message: "Ha ocurrido un error actualizando el horario",
            data: {},
            error: error
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        
        const user = await Users.findByPk(id);
        if( user.rol === "employee" ){
            const employee = await Employees.findByPk(id);
    
            await Schedule.destroy({
                where: {
                    id_user: id
                }
            })

            await employee.destroy(id);
            await user.destroy(id);
    
        }else {
            user.destroy(id);
        }
    
        res.json({
            mgs: "Usuario eliminado",
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Delete user",
            message: "Ha ocurrido un error eliminando el usuario",
            data: {},
            error: error
        });
    }
}

const verificarUser = async (req, res) => {
    try {

        const {
            email,
            password
        } = req.body;

        const user = await Users.findAll({
            where: {
                correo: email
            }
        })

        const coincidePass = user === null 
            ? false
            : await bcrypt.compare(password, user[0].password)
        
        if( user && coincidePass ){

            if( user[0].rol === "employee" ){

                const employee = await Employees.findByPk(user[0].id);

                res.json({
                    id: user[0].id,
                    nombre: user[0].nombre,
                    apellido: user[0].apellido,
                    telefono: user[0].telefono,
                    correo: user[0].correo,
                    cargo: employee.cargo,
                    sede: employee.sede,
                    rol: user[0].rol
                });

            }
            else if( user[0].rol === "admin" ){

                res.json({
                    id: user[0].id,
                    nombre: user[0].nombre,
                    apellido: user[0].apellido,
                    telefono: user[0].telefono,
                    correo: user[0].correo,
                    rol: user[0].rol
                });
            }
            else {
                
                res.json({
                    id: user[0].id,
                    nombre: user[0].nombre,
                    apellido: user[0].apellido,
                    telefono: user[0].telefono,
                    correo: user[0].correo,
                    rol: user[0].rol
                });

            }

        }
        else{
            res.status(401).json({
                data: [],
                error: 'Usuario no encontrado'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            typeError: "Verificar user",
            message: "Ha ocurrido un error verificando el usuario",
            data: {},
            error: error
        });
    }
}

const recoverPassword = async (req, res) => {
    try {

        
        
    } catch (error) {
        res.status(500).json({
            typeError: "Recuperar contraseña",
            message: "Ha ocurrido un error recuperando la contraseña",
            data: {},
            error: error
        });
    }
}

const recoverPasswordDash = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            typeError: "Recuperar contraseña",
            message: "Ha ocurrido un error recuperando la contraseña",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getUsers,
    getUser,
    getEmployees,
    getSchedule,
    verificarUser,
    createUser,
    addEmpleado,
    addSchedule,
    updateUser,
    updateEmployees,
    updateSchedule,
    deleteUser
};
