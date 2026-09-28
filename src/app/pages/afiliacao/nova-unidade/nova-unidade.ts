import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-unidade',
  imports: [FormsModule],
  templateUrl: './nova-unidade.html',
  styleUrl: './nova-unidade.scss'
})
export class NovaUnidade {

  etapa = 1;

  solicitacao = {
    tipo: '',
    nome: '',
    dataFundacao: '',
    responsavel: '',
    comitium: '',
    curia: '',
    justificativa: ''
  };

  proximaEtapa() {
    this.etapa++;
  }

  voltar() {
    this.etapa--;
  }

  enviarSolicitacao() {
    console.log(this.solicitacao);

    alert('Solicitação enviada com sucesso!');
  }
}