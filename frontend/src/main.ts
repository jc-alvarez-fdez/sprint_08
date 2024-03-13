import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


// Compruebo la geolocalización
if (!navigator.geolocation) {
  alert(`El navegador no soporta la geolocalización`);
  throw new Error(`El navegador no soporta la geolocalización`);

}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
