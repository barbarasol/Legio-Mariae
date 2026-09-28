import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solicitacoes-unidades',
  imports: [
    RouterLink
  ],
  templateUrl: './solicitacoes-unidades.html',
  styleUrl: './solicitacoes-unidades.scss'
})
export class SolicitacoesUnidades {

  solicitacoes = [
    {
      id: 1,
      nome: 'Praesidium Rainha da Paz',
      tipo: 'Praesidium',
      solicitante: 'Maria Oliveira',
      comitium: 'Comitium de Brasília',
      data: '20/09/2026',
      status: 'Pendente'
    },
    {
      id: 2,
      nome: 'Cúria Nossa Senhora de Lourdes',
      tipo: 'Cúria',
      solicitante: 'José Silva',
      comitium: 'Comitium de Goiânia',
      data: '12/09/2026',
      status: 'Aprovada'
    },
    {
      id: 3,
      nome: 'Praesidium São Lucas',
      tipo: 'Praesidium',
      solicitante: 'Ana Costa',
      comitium: 'Comitium de Brasília',
      data: '08/09/2026',
      status: 'Rejeitada'
    }
  ];
}