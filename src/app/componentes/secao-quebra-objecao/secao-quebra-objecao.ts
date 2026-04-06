import { Component } from '@angular/core';
import { LANDING_DADOS } from '../../dados/landing.dados';

@Component({
  selector: 'app-secao-quebra-objecao',
  standalone: true,
  templateUrl: './secao-quebra-objecao.html',
})
export class SecaoQuebraObjecao {
  protected readonly dados = LANDING_DADOS;
}
