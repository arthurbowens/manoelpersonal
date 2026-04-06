import { Component } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-galeria',
  standalone: true,
  templateUrl: './secao-galeria.html',
})
export class SecaoGaleria {
  protected readonly dados = LANDING_DADOS;
}
