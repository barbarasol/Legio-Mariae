import { Component } from '@angular/core';
import { ModalConfirmacao } from '../../../../components/modal-confirmacao/modal-confirmacao';

@Component({
  imports: [
    ModalConfirmacao
  ],
  selector: 'app-visualizar-solicitacao',
  styleUrl: './visualizar-solicitacao.scss',
  templateUrl: './visualizar-solicitacao.html',
})
export class VisualizarSolicitacao {
  modalAprovacao = false;

  abrirModalAprovacao() {
    this.modalAprovacao = true;
  }

  cancelarModal() {
    this.modalAprovacao = false;
  }

  confirmarAprovacao() {

    this.modalAprovacao = false;

    console.log('Solicitação aprovada');

  }
}
