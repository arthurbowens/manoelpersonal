import { Component, inject } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';
import { WhatsappContatoService } from '../../servicos/whatsapp-contato.service';

@Component({
  selector: 'app-rodape',
  standalone: true,
  templateUrl: './rodape.html',
})
export class Rodape {
  protected readonly dados = LANDING_DADOS;
  protected readonly whatsapp = inject(WhatsappContatoService);
  protected readonly anoAtual = new Date().getFullYear();

  protected abrirWhatsapp(): void {
    this.whatsapp.abrir();
  }
}
