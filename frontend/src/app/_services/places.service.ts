import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];

  constructor() {
    this.GetUserLocation();
  }

  public GetUserLocation() {
    navigator.geolocation.getCurrentPosition (
      ({coords}) =>  {
        this.useLocation = [coords.latitude, coords.longitude];
      });
 }


}
