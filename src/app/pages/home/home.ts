import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
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
