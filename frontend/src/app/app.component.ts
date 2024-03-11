import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { ListPacientesComponent } from './_components/list-pacientes/list-pacientes.component';
import { PacienteService } from './_services/paciente.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    NavbarComponent,
    ListPacientesComponent,


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
