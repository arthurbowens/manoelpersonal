import { Component } from '@angular/core';
import { LANDING_DADOS, urlWhatsApp } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-nivel',
  standalone: true,
  templateUrl: './secao-nivel.html',
})
export class SecaoNivel {
  protected readonly dados = LANDING_DADOS;
  protected readonly whatsappUrl = urlWhatsApp();
}
