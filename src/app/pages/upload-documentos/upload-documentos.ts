import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-upload-documentos',
  styleUrl: './upload-documentos.scss',
  templateUrl: './upload-documentos.html',
})
export class UploadDocumentos {
  documentos = [
    {
      nome: 'Ata_Reuniao_Janeiro.pdf',
      tamanho: '2.3 MB',
      data: '10/09/2026'
    },
    {
      nome: 'Estatuto_2026.pdf',
      tamanho: '1.8 MB',
      data: '01/08/2026'
    }
  ];
}
