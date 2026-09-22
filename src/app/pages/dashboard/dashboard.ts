import { Component, OnInit } from '@angular/core';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  PieController,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  PieController,
  Tooltip,
  Legend
);

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  dashboard = {
    membros: 1250,
    curias: 12,
    comitium: 4,
    presidios: 38,
    ativos: 980,
    auxiliares: 270
  };

  ultimosMembros = [
    {
      nome: 'Maria Silva',
      funcao: 'Legionária',
      presidium: 'Nossa Senhora das Graças',
      status: 'Ativo'
    },
    {
      nome: 'José Santos',
      funcao: 'Tesoureiro',
      presidium: 'Rainha dos Apóstolos',
      status: 'Ativo'
    },
    {
      nome: 'Ana Oliveira',
      funcao: 'Secretária',
      presidium: 'Mãe da Igreja',
      status: 'Ativo'
    }
  ];

  ngOnInit(): void {
    this.criarGraficoMembros();
    this.criarGraficoEstrutura();
    this.criarGraficoEvolucao();
  }

  criarGraficoMembros(): void {

    new Chart('membrosChart', {

      type: 'pie',

      data: {

        labels: ['Ativos', 'Auxiliares'],

        datasets: [
          {
            data: [980, 270],
            backgroundColor: [
              '#14265c',
              '#c9a227'
            ]
          }
        ]
      }

    });

  }

  criarGraficoEstrutura(): void {

    new Chart('estruturaChart', {

      type: 'bar',

      data: {

        labels: [
          'Cúrias',
          'Comitium',
          'Praesidia'
        ],

        datasets: [
          {
            label: 'Quantidade',

            data: [
              12,
              4,
              38
            ],

            backgroundColor: '#14265c'
          }
        ]

      },

      options: {
        responsive: true
      }

    });

  }

  criarGraficoEvolucao(): void {

    new Chart('evolucaoChart', {

      type: 'line',

      data: {

        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun'
        ],

        datasets: [
          {
            label: 'Membros',

            data: [
              1000,
              1050,
              1080,
              1120,
              1180,
              1250
            ],

            borderColor: '#14265c',

            backgroundColor: '#14265c',

            tension: 0.3
          }
        ]

      },

      options: {
        responsive: true
      }

    });

  }

}
