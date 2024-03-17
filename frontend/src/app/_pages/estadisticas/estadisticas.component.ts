import { Component } from '@angular/core';
import * as Chart from 'chart.js';
import { GrafTrasladosComponent } from '../../_components/graf-traslados/graf-traslados.component';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    GrafTrasladosComponent
  ],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {

}
