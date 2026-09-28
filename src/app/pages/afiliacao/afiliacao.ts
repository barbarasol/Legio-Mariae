import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Presidium {
  id: number;
  nome: string;
  membros: number;
  status: 'Ativo' | 'Inativo';
}

interface Curia {
  id: number;
  nome: string;
  presidia: Presidium[];
}

interface Comitium {
  id: number;
  nome: string;
  cidade: string;
  curias: Curia[];
}

@Component({
  selector: 'app-afiliacao',
  imports: [
    FormsModule, 
    RouterLink
  ],
  templateUrl: './afiliacao.html',
  styleUrl: './afiliacao.scss'
})
export class Afiliacao {

  comitiumSelecionado = 1;
  curiaSelecionada: number | null = null;
  presidiumSelecionado: number | null = null;

  unidadeSelecionada: {
    tipo: 'Comitium' | 'Cúria' | 'Praesidium';
    nome: string;
    superior: string;
    comitium: string;
    membros: number;
    status: 'Ativo' | 'Inativo';
  } | null = null;

  comitiums: Comitium[] = [
    {
      id: 1,
      nome: 'Comitium de Brasília',
      cidade: 'Brasília - DF',
      curias: [
        {
          id: 1,
          nome: 'Cúria Nossa Senhora Aparecida',
          presidia: [
            {
              id: 1,
              nome: 'Praesidium Rainha da Paz',
              membros: 32,
              status: 'Ativo'
            },
            {
              id: 2,
              nome: 'Praesidium São José',
              membros: 27,
              status: 'Ativo'
            }
          ]
        },
        {
          id: 2,
          nome: 'Cúria Nossa Senhora de Fátima',
          presidia: [
            {
              id: 3,
              nome: 'Praesidium Mãe da Igreja',
              membros: 24,
              status: 'Ativo'
            },
            {
              id: 4,
              nome: 'Praesidium Imaculada Conceição',
              membros: 19,
              status: 'Ativo'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      nome: 'Comitium de Goiânia',
      cidade: 'Goiânia - GO',
      curias: [
        {
          id: 3,
          nome: 'Cúria Nossa Senhora das Graças',
          presidia: [
            {
              id: 5,
              nome: 'Praesidium Imaculada Conceição',
              membros: 28,
              status: 'Ativo'
            },
            {
              id: 6,
              nome: 'Praesidium Nossa Senhora de Lourdes',
              membros: 21,
              status: 'Ativo'
            }
          ]
        }
      ]
    }
  ];

  get comitiumAtual(): Comitium | undefined {
    return this.comitiums.find(
      comitium => comitium.id === this.comitiumSelecionado
    );
  }

  get curiasDisponiveis(): Curia[] {
    return this.comitiumAtual?.curias ?? [];
  }

  get curiaAtual(): Curia | undefined {
    return this.curiasDisponiveis.find(
      curia => curia.id === this.curiaSelecionada
    );
  }

  get presidiaDisponiveis(): Presidium[] {
    return this.curiaAtual?.presidia ?? [];
  }

  selecionarComitium(): void {
    this.curiaSelecionada = null;
    this.presidiumSelecionado = null;
    this.unidadeSelecionada = null;
  }

  selecionarCuria(): void {
    this.presidiumSelecionado = null;
    this.unidadeSelecionada = null;
  }

  selecionarPresidium(): void {
    this.unidadeSelecionada = null;
  }

  visualizarComitium(comitium: Comitium): void {
    this.unidadeSelecionada = {
      tipo: 'Comitium',
      nome: comitium.nome,
      superior: 'Região superior',
      comitium: comitium.nome,
      membros: this.contarMembrosComitium(comitium),
      status: 'Ativo'
    };
  }

  visualizarCuria(curia: Curia): void {
    const comitium = this.comitiumAtual;

    this.unidadeSelecionada = {
      tipo: 'Cúria',
      nome: curia.nome,
      superior: comitium?.nome ?? '-',
      comitium: comitium?.nome ?? '-',
      membros: this.contarMembrosCuria(curia),
      status: 'Ativo'
    };
  }

  visualizarPresidium(presidium: Presidium): void {
    const curia = this.curiaAtual;
    const comitium = this.comitiumAtual;

    this.unidadeSelecionada = {
      tipo: 'Praesidium',
      nome: presidium.nome,
      superior: curia?.nome ?? '-',
      comitium: comitium?.nome ?? '-',
      membros: presidium.membros,
      status: presidium.status
    };
  }

  get unidadeSelecionadaEhComitium(): boolean {
    return this.unidadeSelecionada?.tipo === 'Comitium';
  }

  get unidadeSelecionadaEhCuria(): boolean {
    return this.unidadeSelecionada?.tipo === 'Cúria';
  }

  get unidadeSelecionadaEhPresidium(): boolean {
    return this.unidadeSelecionada?.tipo === 'Praesidium';
  }

  private contarMembrosComitium(comitium: Comitium): number {
    return comitium.curias.reduce(
      (total, curia) => total + this.contarMembrosCuria(curia),
      0
    );
  }

  private contarMembrosCuria(curia: Curia): number {
    return curia.presidia.reduce(
      (total, presidium) => total + presidium.membros,
      0
    );
  }
}

