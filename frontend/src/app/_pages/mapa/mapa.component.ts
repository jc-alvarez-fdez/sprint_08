import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../_services/places.service';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {

  constructor(private _placesService: PlacesService) {}

  ngOnInit(): void {

    setTimeout(() => {
      console.log(this._placesService.useLocation);
    }, 2000);



  }


}

