import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../_interfaces/paciente.interface';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/pacientes/';
  }

  // Endpoints
  getListPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deletePaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);

  }

  savePaciente(paciente: Paciente): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, paciente);
  }

  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updatePaciente(id: number, paciente: Paciente): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, paciente);
  }

  getMapaPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }


}
