import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graf-traslados',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './graf-traslados.component.html',
  styleUrl: './graf-traslados.component.scss'
})
export class GrafTrasladosComponent implements OnInit {

  chart: any;
  data = [
    { mes: "enero", pacientes: 459 },
    { mes: "febrero", pacientes: 390 },
    { mes: "marzo", pacientes: 287 },
    { mes: "abril", pacientes: 384 },
    { mes: "mayo", pacientes: 329 },
    { mes: "junio", pacientes: 380 },
    { mes: "julio", pacientes: 321 },
    { mes: "agosto", pacientes: 218 },
    { mes: "septiembre", pacientes: 358 },
    { mes: "octubre", pacientes: 421 },
    { mes: "noviembre", pacientes: 371 },
    { mes: "diciembre", pacientes: 229 },
  ];


  ngOnInit(): void {

    this.chart = new Chart('traslados', {
      type: 'bar',
      data: {
        labels: this.data.map(row => row.mes),
        datasets: [
          {
            label: 'Pacientes transportados',
            data: this.data.map(row => row.pacientes)
          }
        ],
      },
    })

  }



}
