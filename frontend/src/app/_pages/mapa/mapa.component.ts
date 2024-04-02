import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { icon, Map, marker, point, tileLayer } from 'leaflet';
import { MapaService } from '../../_services/mapa.service';
import { HttpClient } from '@angular/common/http';
import { MapaPaciente } from '../../_interfaces/mapa.interface';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  geo: any;
  map: any;
  public mapaPacientes: MapaPaciente [] = [];

  constructor(
    private _mapaService: MapaService,
    private http: HttpClient) {}

  ngOnInit(): void {

    this.getListMapaPacientes();
  }

  getListMapaPacientes() {
    this._mapaService.getListMapaPacientes().subscribe((data: MapaPaciente[]) => {
      this.mapaPacientes = data;
      // Inicializa el mapa y agrega los marcadores después de obtener la lista de pacientes
      this.inicializarMapa();
    });
  }

  inicializarMapa() {
    this.map = new Map('map').setView([41.3858407, 2.1525108], 13);
    tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    }).addTo(this.map);

    this.mapaPacientes.forEach((paciente, index) => {
      marker([paciente.longitud, paciente.latitud] as [number, number]).addTo(this.map)

        .bindPopup(`<strong>${paciente.nombre} ${paciente.apellidos}</strong><br> ${paciente.direccion}`)

        .openPopup();
    });
  }

  recargar() {
    location.reload();
  }
}
