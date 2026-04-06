import { Component } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-depoimentos',
  standalone: true,
  templateUrl: './secao-depoimentos.html',
})
export class SecaoDepoimentos {
  protected readonly dados = LANDING_DADOS;
}
