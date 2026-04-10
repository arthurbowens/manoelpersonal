import { Component } from '@angular/core';
import { LANDING_DADOS, urlWhatsApp } from '../../dados/landing.dados';

@Component({
  selector: 'app-rodape',
  standalone: true,
  templateUrl: './rodape.html',
})
export class Rodape {
  protected readonly dados = LANDING_DADOS;
  protected readonly anoAtual = new Date().getFullYear();
  protected readonly whatsappUrl = urlWhatsApp();
}
