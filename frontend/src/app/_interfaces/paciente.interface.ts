import Paciente from '../../../../server/src/models/paciente.model';
export interface Paciente {
  id?: number;
  nombre: string;
  apellidos: string;
  dni: string;
  tel: number;
  email: string;
  direccion: string;
  longitud?: number;
  latitud?: number;
}
