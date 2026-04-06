import { Component } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-servicos',
  standalone: true,
  templateUrl: './secao-servicos.html',
})
export class SecaoServicos {
  protected readonly dados = LANDING_DADOS;
}
