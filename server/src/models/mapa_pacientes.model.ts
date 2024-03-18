import db from '../db/connection';
import { DataTypes } from 'sequelize';


const MapaPaciente = db.define('mapaPaciente', {

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
    longitud: {
        type: DataTypes.DOUBLE
    },
    latitud: {
        type: DataTypes.DOUBLE
    },

}, {
    timestamps: false // Desactiva las timestamps por defecto (createdAty updatedAt)
  });
export default MapaPaciente