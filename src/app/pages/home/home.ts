import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  usuario = {
    nome: 'Bárbara Sol',
    funcao: 'Presidente do Praesidium',
    foto: 'assets/avatar.png'
  };
}
