import { Router } from "express";
import { addPatient, deletePatient, getPatient, getPatients, updatePatient } from "../controllers/paciente.controller";

const router = Router();

router.get('/', getPatients); //devuelve todos los pacientes
router.get('/:id', getPatient); //devuelve paciente por id
router.delete('/:id', deletePatient); // elimina paciente por id
router.post('/', addPatient); // añade paciente
router.put('/:id', updatePatient); // actualiza paciente


export default router;