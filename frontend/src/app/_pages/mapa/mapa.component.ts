import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { icon, Map, marker, tileLayer} from 'leaflet';
import { PlacesService } from '../../_services/places.service';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {

  geo: any;
  map: any;

  constructor(private _placesService: PlacesService) {}

  ngOnInit(): void {

    setTimeout(() => {
      this.geo = this._placesService.useLocation;
    }, 2000);
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.map = new Map('map').setView(this.geo, 13); // coordenadas para el mapa inicial

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	      maxZoom: 19,
	      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

    }, 2000);
  }

  ubicar() {
     // Personalizar icono
     /*
      const myIcon = icon ({
      iconUrl: '../../../assets/...',
      iconSize: [25,41],
    })
     marker(this.geo,{icon: myIcon}).addTo(this.map).... añadir en esta línea ,{icon...
    */
    setTimeout(() => {
      marker(this.geo).addTo(this.map).bindPopup("<strong>Ésta es mi ubicación</strong>").openPopup();
    }, 2000)
  }

  recargar (){
    location.reload();
  }

}

