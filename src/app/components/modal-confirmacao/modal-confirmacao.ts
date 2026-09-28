import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.html',
  styleUrl: './modal-confirmacao.scss'
})
export class ModalConfirmacao {

  @Input() aberto = false;

  @Input() titulo = 'Confirmação';

  @Input() mensagem = '';

  @Input() textoConfirmar = 'Confirmar';

  @Input() textoCancelar = 'Cancelar';

  @Input() tipo: 'success' | 'danger' | 'warning' = 'success';

  @Output() confirmar = new EventEmitter<void>();

  @Output() cancelar = new EventEmitter<void>();

  onConfirmar() {
    this.confirmar.emit();
  }

  onCancelar() {
    this.cancelar.emit();
  }
}