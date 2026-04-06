import { Component } from '@angular/core';
import { PaginaInicial } from './paginas/inicial/pagina-inicial';

@Component({
  selector: 'app-root',
  imports: [PaginaInicial],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
