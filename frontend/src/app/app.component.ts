import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { ListPacientesComponent } from './_pages/list-pacientes/list-pacientes.component';
import { PacienteService } from './_services/paciente.service';
import { MapaComponent } from './_pages/mapa/mapa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    NavbarComponent,
    ListPacientesComponent,
    MapaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

}
