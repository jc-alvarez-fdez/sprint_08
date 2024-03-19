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
    // Obtiene la información de geolocalización después de 2 segundos
    /*setTimeout(() => {
      this.geo = this._mapaService.useLocation;
    }, 2000); */

    // Obtiene la lista de pacientes
    this.getListMapaPacientes();
  }

  // Función para obtener la lista de pacientes
  getListMapaPacientes() {
    this._mapaService.getListMapaPacientes().subscribe((data: MapaPaciente[]) => {
      this.mapaPacientes = data;
      // Inicializa el mapa y agrega los marcadores después de obtener la lista de pacientes
      this.inicializarMapa();
    });
  }

  // Función para inicializar el mapa y agregar los marcadores
  inicializarMapa() {
    this.map = new Map('map').setView([41.3858407, 2.1525108], 13);
    // Añade una capa de mapa con OpenStreetMap
    tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    }).addTo(this.map);

    // Recorre la lista de pacientes y añade un marcador para cada uno
    this.mapaPacientes.forEach((paciente, index) => {
      // Crea un marcador con la latitud y la longitud del paciente
      marker([paciente.longitud, paciente.latitud] as [number, number]).addTo(this.map)

        // Asigna un popup al marcador con la información del paciente
        .bindPopup(`<strong>${paciente.nombre} ${paciente.apellidos}</strong><br> ${paciente.direccion}`)

        // Abre el popup del marcador
        .openPopup();
    });
  }

  recargar() {
    location.reload();
  }
}
