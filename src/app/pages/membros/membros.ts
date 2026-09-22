import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-membros',
  styleUrl: './membros.scss',
  templateUrl: './membros.html',
})
export class Membros {
  membros = [
    {
      id: 1,
      nome: 'Maria Silva',
      cargo: 'Presidente',
      presidium: 'Nossa Senhora das Graças',
      status: 'Ativo'
    },
    {
      id: 2,
      nome: 'José Santos',
      cargo: 'Secretário',
      presidium: 'Rainha dos Apóstolos',
      status: 'Ativo'
    },
    {
      id: 3,
      nome: 'Ana Oliveira',
      cargo: 'Tesoureira',
      presidium: 'Mãe da Igreja',
      status: 'Inativo'
    }
  ];

  constructor(
    private router: Router
  ) {}

  novoMembro(){
    this.router.navigate(['cadastro-membro'])
  }
}
