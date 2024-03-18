import e, { Request, Response } from 'express';
import MapaPaciente from '../models/mapa_pacientes.model';


// Muestra todos los pacientes
export const getMapaPacientes = async (req: Request, res: Response) => {
    const listMapaPacientes = await MapaPaciente.findAll();
    res.json(listMapaPacientes);
}
/* 
// Muestra paciente por id
export const getMapaPaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const mapaPaciente = await MapaPaciente.findByPk(id);

    if (mapaPaciente) {
        res.json(mapaPaciente);
    } else {
        res.status(404).json({
            msg: `No existe un paciente con el id ${id}`
        })
    };
}


// Elimina paciente por id
export const deleteMapaPaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const mapaPaciente = await MapaPaciente.findByPk(id);
    if (!mapaPaciente) {
        res.status(404).json({
            msg: `No existe un paciente con el id ${id}`
        })
    } else {
        await mapaPaciente.destroy();
        res.json({
            msg: `El paciente se ha eliminado`
        })

    }
}



// Añadir paciente
export const addMapaPaciente = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await MapaPaciente.create(body);

        res.json({
            msg: 'El paciente se ha añadido',
            body
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error, póngase en contacto con soporte',
        });
    }
}    

// Modificar paciente
export const updateMapaPaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const mapaPaciente = await MapaPaciente.findByPk(id);

        if (mapaPaciente) {
            await mapaPaciente.update(body);
            res.json({
                msg: `El paciente se ha actualizado`
            })
        } else {
            res.status(404).json({
                msg: `No existe un paciente con el id ${id}`
            })
        } 
    } 
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error, póngase en contacto con soporte',
        });
    } 
}*/

