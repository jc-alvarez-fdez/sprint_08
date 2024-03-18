import { Router } from "express";
import { addPatient, deletePatient, getPatient, getPatients, updatePatient } from "../controllers/paciente.controller";

const routerPatients = Router();

routerPatients.get('/', getPatients); //devuelve todos los pacientes
routerPatients.get('/:id', getPatient); //devuelve paciente por id
routerPatients.delete('/:id', deletePatient); // elimina paciente por id
routerPatients.post('/', addPatient); // añade paciente
routerPatients.put('/:id', updatePatient); // actualiza paciente


export default routerPatients;