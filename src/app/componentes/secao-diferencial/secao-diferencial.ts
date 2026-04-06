import { Component } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-diferencial',
  standalone: true,
  templateUrl: './secao-diferencial.html',
})
export class SecaoDiferencial {
  protected readonly dados = LANDING_DADOS;
}
