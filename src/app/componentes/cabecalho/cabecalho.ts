import { Component, signal } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  templateUrl: './cabecalho.html',
})
export class Cabecalho {
  protected readonly dados = LANDING_DADOS;

  protected readonly menuAberto = signal(false);

  protected alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  protected fecharMenu(): void {
    this.menuAberto.set(false);
  }
}
