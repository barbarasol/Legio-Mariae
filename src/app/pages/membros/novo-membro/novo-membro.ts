import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-novo-membro',
  styleUrl: './novo-membro.scss',
  templateUrl: './novo-membro.html',
})
export class NovoMembro {
  etapa = 1;

  proximo(): void {

    if (this.etapa < 3) {
      this.etapa++;
    }

  }

  voltar(): void {

    if (this.etapa > 1) {
      this.etapa--;
    }

  }
}
