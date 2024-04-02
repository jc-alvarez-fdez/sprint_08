import { Request, Response } from 'express';
import MapaPaciente from '../models/mapa_pacientes.model';


// Muestra todos los pacientes
export const getMapaPacientes = async (req: Request, res: Response) => {
    const listMapaPacientes = await MapaPaciente.findAll();
    res.json(listMapaPacientes);
}
