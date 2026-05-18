import { Component, inject, signal } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';
import { WhatsappContatoService } from '../../servicos/whatsapp-contato.service';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  templateUrl: './cabecalho.html',
})
export class Cabecalho {
  protected readonly dados = LANDING_DADOS;
  protected readonly whatsapp = inject(WhatsappContatoService);

  protected readonly menuAberto = signal(false);

  protected abrirWhatsapp(): void {
    this.whatsapp.abrir();
    this.fecharMenu();
  }

  protected alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  protected fecharMenu(): void {
    this.menuAberto.set(false);
  }
}
