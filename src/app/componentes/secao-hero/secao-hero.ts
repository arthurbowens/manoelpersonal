import { Component } from '@angular/core';
import { LANDING_DADOS, urlWhatsApp } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-hero',
  standalone: true,
  templateUrl: './secao-hero.html',
})
export class SecaoHero {
  protected readonly dados = LANDING_DADOS;
  protected readonly whatsappUrl = urlWhatsApp();
}
