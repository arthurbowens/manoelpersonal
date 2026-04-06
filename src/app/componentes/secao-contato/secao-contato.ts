import { Component } from '@angular/core';
import { LANDING_DADOS, urlWhatsApp } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-contato',
  standalone: true,
  templateUrl: './secao-contato.html',
})
export class SecaoContato {
  protected readonly dados = LANDING_DADOS;
  protected readonly whatsappUrl = urlWhatsApp();
}
