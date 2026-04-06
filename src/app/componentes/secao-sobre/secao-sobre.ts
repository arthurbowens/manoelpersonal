import { Component } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-sobre',
  standalone: true,
  templateUrl: './secao-sobre.html',
})
export class SecaoSobre {
  protected readonly dados = LANDING_DADOS;
}
