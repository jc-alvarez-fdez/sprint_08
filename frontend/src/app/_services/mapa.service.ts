import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapaPaciente } from '../_interfaces/mapa.interface';

@Injectable({
  providedIn: 'root'
})
export class MapaService {


  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/mapa_pacientes/';
  }



  // Endpoints
  getListMapaPacientes(): Observable<MapaPaciente[]> {
    return this.http.get<MapaPaciente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteMapaPaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);

  }

  saveMapaPaciente(paciente: MapaPaciente): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, paciente);
  }

  getMapaPaciente(id: number): Observable<MapaPaciente> {
    return this.http.get<MapaPaciente>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateMapaPaciente(id: number, paciente: MapaPaciente): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, paciente);
  }


}
