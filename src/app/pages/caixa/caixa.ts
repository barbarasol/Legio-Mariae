import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface Movimentacao {
  id: number;
  data: string;
  tipo: 'Entrada' | 'Saída';
  descricao: string;
  categoria: string;
  valor: number;
  comitium: string;
  curia: string;
  presidium: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-caixa',
  styleUrl: './caixa.scss',
  templateUrl: './caixa.html',
})
export class Caixa implements AfterViewInit{
mesSelecionado = '09';
  anoSelecionado = '2026';

  comitiumSelecionado = 'Todos';
  curiaSelecionada = 'Todas';
  presidiumSelecionado = 'Todos';

  movimentacoes: Movimentacao[] = [
    {
      id: 1,
      data: '02/09/2026',
      tipo: 'Entrada',
      descricao: 'Contribuição mensal',
      categoria: 'Contribuições',
      valor: 500,
      comitium: 'Comitium de Brasília',
      curia: 'Cúria Nossa Senhora Aparecida',
      presidium: 'Praesidium Rainha da Paz'
    },
    {
      id: 2,
      data: '05/09/2026',
      tipo: 'Saída',
      descricao: 'Compra de materiais',
      categoria: 'Materiais',
      valor: 120,
      comitium: 'Comitium de Brasília',
      curia: 'Cúria Nossa Senhora Aparecida',
      presidium: 'Praesidium Rainha da Paz'
    },
    {
      id: 3,
      data: '08/09/2026',
      tipo: 'Entrada',
      descricao: 'Doação',
      categoria: 'Doações',
      valor: 800,
      comitium: 'Comitium de Brasília',
      curia: 'Cúria Nossa Senhora Aparecida',
      presidium: 'Praesidium São José'
    },
    {
      id: 4,
      data: '10/09/2026',
      tipo: 'Saída',
      descricao: 'Transporte',
      categoria: 'Transporte',
      valor: 250,
      comitium: 'Comitium de Brasília',
      curia: 'Cúria Nossa Senhora Aparecida',
      presidium: 'Praesidium São José'
    },
    {
      id: 5,
      data: '12/09/2026',
      tipo: 'Entrada',
      descricao: 'Contribuição mensal',
      categoria: 'Contribuições',
      valor: 650,
      comitium: 'Comitium de Brasília',
      curia: 'Cúria Nossa Senhora de Fátima',
      presidium: 'Praesidium Mãe da Igreja'
    },
    {
      id: 6,
      data: '15/09/2026',
      tipo: 'Saída',
      descricao: 'Material de formação',
      categoria: 'Formação',
      valor: 180,
      comitium: 'Comitium de Brasília',
      curia: 'Cúria Nossa Senhora de Fátima',
      presidium: 'Praesidium Mãe da Igreja'
    },
    {
      id: 7,
      data: '18/09/2026',
      tipo: 'Entrada',
      descricao: 'Campanha',
      categoria: 'Campanhas',
      valor: 1_200,
      comitium: 'Comitium de Goiânia',
      curia: 'Cúria Nossa Senhora das Graças',
      presidium: 'Praesidium Imaculada Conceição'
    },
    {
      id: 8,
      data: '20/09/2026',
      tipo: 'Saída',
      descricao: 'Evento',
      categoria: 'Eventos',
      valor: 400,
      comitium: 'Comitium de Goiânia',
      curia: 'Cúria Nossa Senhora das Graças',
      presidium: 'Praesidium Imaculada Conceição'
    }
  ];

  movimentacoesFiltradas: Movimentacao[] = [];

  constructor() {
    this.movimentacoesFiltradas = [...this.movimentacoes];
  }

  ngAfterViewInit(): void {
    this.criarGraficoEntradasSaidas();
    this.criarGraficoCategorias();
  }

  get totalEntradas(): number {
    return this.movimentacoesFiltradas
      .filter(m => m.tipo === 'Entrada')
      .reduce((total, m) => total + m.valor, 0);
  }

  get totalSaidas(): number {
    return this.movimentacoesFiltradas
      .filter(m => m.tipo === 'Saída')
      .reduce((total, m) => total + m.valor, 0);
  }

  get saldo(): number {
    return this.totalEntradas - this.totalSaidas;
  }

  get saldoAcumulado(): number {
    // Mock temporário.
    // Depois podemos calcular com base no histórico real.
    return 18750 + this.saldo;
  }

  aplicarFiltros(): void {
    this.movimentacoesFiltradas = this.movimentacoes.filter(movimentacao => {

      const mesmoComitium =
        this.comitiumSelecionado === 'Todos' ||
        movimentacao.comitium === this.comitiumSelecionado;

      const mesmaCuria =
        this.curiaSelecionada === 'Todas' ||
        movimentacao.curia === this.curiaSelecionada;

      const mesmoPresidium =
        this.presidiumSelecionado === 'Todos' ||
        movimentacao.presidium === this.presidiumSelecionado;

      return mesmoComitium && mesmaCuria && mesmoPresidium;
    });

    this.atualizarGraficos();
  }

  limparFiltros(): void {
    this.comitiumSelecionado = 'Todos';
    this.curiaSelecionada = 'Todas';
    this.presidiumSelecionado = 'Todos';

    this.movimentacoesFiltradas = [...this.movimentacoes];

    this.atualizarGraficos();
  }

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  private graficoEntradasSaidas?: Chart;
  private graficoCategorias?: Chart;

  private criarGraficoEntradasSaidas(): void {
    const canvas = document.getElementById(
      'entradasSaidasChart'
    ) as HTMLCanvasElement;

    if (!canvas) {
      return;
    }

    this.graficoEntradasSaidas = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Entradas', 'Saídas'],
        datasets: [
          {
            label: 'Valor',
            data: [this.totalEntradas, this.totalSaidas],
            backgroundColor: ['#198754', '#dc3545'],
            borderRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  private criarGraficoCategorias(): void {
    const canvas = document.getElementById(
      'categoriasChart'
    ) as HTMLCanvasElement;

    if (!canvas) {
      return;
    }

    const categorias = this.movimentacoesFiltradas
      .filter(m => m.tipo === 'Saída')
      .reduce((resultado: Record<string, number>, movimentacao) => {

        resultado[movimentacao.categoria] =
          (resultado[movimentacao.categoria] || 0) + movimentacao.valor;

        return resultado;

      }, {});

    this.graficoCategorias = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: Object.keys(categorias),
        datasets: [
          {
            data: Object.values(categorias)
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  private atualizarGraficos(): void {

    if (this.graficoEntradasSaidas) {
      this.graficoEntradasSaidas.data.datasets[0].data = [
        this.totalEntradas,
        this.totalSaidas
      ];

      this.graficoEntradasSaidas.update();
    }

    if (this.graficoCategorias) {

      const categorias = this.movimentacoesFiltradas
        .filter(m => m.tipo === 'Saída')
        .reduce((resultado: Record<string, number>, movimentacao) => {

          resultado[movimentacao.categoria] =
            (resultado[movimentacao.categoria] || 0) + movimentacao.valor;

          return resultado;

        }, {});

      this.graficoCategorias.data.labels = Object.keys(categorias);
      this.graficoCategorias.data.datasets[0].data =
        Object.values(categorias);

      this.graficoCategorias.update();
    }
  }
}
