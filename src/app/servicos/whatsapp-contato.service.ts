import { Injectable, signal } from '@angular/core';
import { montarUrlWhatsApp } from '../dados/landing.dados';

@Injectable({ providedIn: 'root' })
export class WhatsappContatoService {
  private readonly abertoSignal = signal(false);
  readonly aberto = this.abertoSignal.asReadonly();

  abrir(): void {
    this.abertoSignal.set(true);
  }

  fechar(): void {
    this.abertoSignal.set(false);
  }

  enviar(objetivoId: string, nome?: string, outroTexto?: string): void {
    const url = montarUrlWhatsApp({ objetivoId, nome, outroTexto });
    window.open(url, '_blank', 'noopener,noreferrer');
    this.fechar();
  }
}
