import { Component } from '@angular/core';
import { Cabecalho } from '../../componentes/cabecalho/cabecalho';
import { Rodape } from '../../componentes/rodape/rodape';
import { SecaoContato } from '../../componentes/secao-contato/secao-contato';
import { SecaoDepoimentos } from '../../componentes/secao-depoimentos/secao-depoimentos';
import { SecaoDiferencial } from '../../componentes/secao-diferencial/secao-diferencial';
import { SecaoGaleria } from '../../componentes/secao-galeria/secao-galeria';
import { SecaoHero } from '../../componentes/secao-hero/secao-hero';
import { SecaoNivel } from '../../componentes/secao-nivel/secao-nivel';
import { SecaoQuebraObjecao } from '../../componentes/secao-quebra-objecao/secao-quebra-objecao';
import { SecaoServicos } from '../../componentes/secao-servicos/secao-servicos';
import { SecaoSobre } from '../../componentes/secao-sobre/secao-sobre';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [
    Cabecalho,
    SecaoHero,
    SecaoQuebraObjecao,
    SecaoSobre,
    SecaoServicos,
    SecaoDiferencial,
    SecaoGaleria,
    SecaoDepoimentos,
    SecaoNivel,
    SecaoContato,
    Rodape,
  ],
  templateUrl: './pagina-inicial.html',
})
export class PaginaInicial {}
