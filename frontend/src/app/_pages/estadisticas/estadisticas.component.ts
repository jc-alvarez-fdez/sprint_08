import { Component } from '@angular/core';
import * as Chart from 'chart.js';
import { GrafTrasladosComponent } from '../../_components/graf-traslados/graf-traslados.component';
import { GrafTipoVisitaComponent } from '../../_components/graf-tipo-visita/graf-tipo-visita.component';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    GrafTrasladosComponent,
    GrafTipoVisitaComponent
  ],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss'
})
export class EstadisticasComponent {

}
