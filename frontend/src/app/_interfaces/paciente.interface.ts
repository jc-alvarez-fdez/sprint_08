export interface Paciente {
  id?: number;
  nombre: string;
  apellidos: string;
  dni: string;
  tel: number;
  email: string;
  direccion: string;
  latitud?: number;
  longitud?: number;
}

