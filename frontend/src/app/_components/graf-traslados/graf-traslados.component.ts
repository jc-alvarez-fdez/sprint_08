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
  styleUrl: './graf-traslados.component.css'
})
export class GrafTrasladosComponent implements OnInit {
  
  chart: any;
  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  
  ngOnInit(): void {
     
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: this.data.map(row => row.count)
          }
        ],
      },
    })

  }



}
