import { Component, inject } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';
import { WhatsappContatoService } from '../../servicos/whatsapp-contato.service';

@Component({
  selector: 'app-secao-hero',
  standalone: true,
  templateUrl: './secao-hero.html',
})
export class SecaoHero {
  protected readonly dados = LANDING_DADOS;
  protected readonly whatsapp = inject(WhatsappContatoService);

  protected abrirWhatsapp(): void {
    this.whatsapp.abrir();
  }
}
