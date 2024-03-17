import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-graf-tipo-visita',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './graf-tipo-visita.component.html',
  styleUrl: './graf-tipo-visita.component.css'
})


export class GrafTipoVisitaComponent implements OnInit {

  chart: any;
  data = {
    labels: [
      'Rehabilitación',
      'Consultas',
      'Analíticas',
      'Otros'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 216, 100, 56],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(185, 25, 126)'
      ],
      hoverOffset: 4
    }]
  };




  ngOnInit(): void {

    this.chart = new Chart('tipo_visita', {
      type: 'doughnut',
      data: this.data,
    })
  }

}
