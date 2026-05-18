import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LANDING_DADOS } from '../../dados/landing.dados';
import { WhatsappContatoService } from '../../servicos/whatsapp-contato.service';

@Component({
  selector: 'app-modal-whatsapp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-whatsapp.html',
})
export class ModalWhatsapp {
  protected readonly dados = LANDING_DADOS;
  protected readonly whatsapp = inject(WhatsappContatoService);

  protected objetivoId = '';
  protected nome = '';
  protected outroTexto = '';
  protected erro: string | null = null;

  @HostListener('document:keydown.escape')
  protected aoPressionarEscape(): void {
    if (this.whatsapp.aberto()) {
      this.fechar();
    }
  }

  protected enviar(): void {
    if (!this.objetivoId) {
      this.erro = this.dados.whatsappFormulario.erroObjetivo;
      return;
    }

    if (this.objetivoId === 'outro' && !this.outroTexto.trim()) {
      this.erro = this.dados.whatsappFormulario.erroOutro;
      return;
    }

    this.whatsapp.enviar(this.objetivoId, this.nome, this.outroTexto);
    this.limpar();
  }

  protected fechar(): void {
    this.whatsapp.fechar();
    this.limpar();
  }

  private limpar(): void {
    this.objetivoId = '';
    this.nome = '';
    this.outroTexto = '';
    this.erro = null;
  }
}
