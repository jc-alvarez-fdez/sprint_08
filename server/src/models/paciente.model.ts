import db from '../db/connection';
import { DataTypes } from 'sequelize';


const Paciente = db.define('Paciente', {

    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.STRING
    },
    tel: {
        type: DataTypes.NUMBER
    },
    email: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },

}, {
    timestamps: false // Desactiva las timestamps por defecto (createdAty updatedAt)
  });
export default Paciente