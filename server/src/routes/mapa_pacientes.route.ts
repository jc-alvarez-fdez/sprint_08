import { Router } from "express";

import { getMapaPacientes } from '../controllers/mapa_paciente.controller';
// import { getMapaPaciente, deleteMapaPaciente, addMapaPaciente, updateMapaPaciente } from '../controllers/mapa_paciente.controller';

const routerMapaPacientes = Router();

routerMapaPacientes.get('/', getMapaPacientes); //devuelve todos los pacientes
// routerMapaPacientes.get('/:id', getMapaPaciente); //devuelve paciente por id
// routerMapaPacientes.delete('/:id', deleteMapaPaciente); // elimina paciente por id
// routerMapaPacientes.post('/', addMapaPaciente); // añade paciente
// routerMapaPacientes.put('/:id', updateMapaPaciente); // actualiza paciente


export default routerMapaPacientes;