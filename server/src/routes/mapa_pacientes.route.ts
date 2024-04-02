import { Router } from "express";

import { getMapaPacientes } from '../controllers/mapa_paciente.controller';

const routerMapaPacientes = Router();

routerMapaPacientes.get('/', getMapaPacientes); //devuelve todos los pacientes ubicados en el mapa



export default routerMapaPacientes;