import { Component, destroyPlatform, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  
  // Você tem que adicionar o !porque a entrada 
  // está esperando que o valor seja passado. 
  // Neste caso, não há valor padrão. Em nosso 
  // caso de aplicação de exemplo, sabemos que 
  // o valor será passado - isso é por design. 
  // O ponto de exclamação é chamado de operador 
  // de asserção não nulo e informa ao compilador 
  // TypeScript que o valor desta propriedade não 
  // será nulo ou indefinido.
  // Em resumo, housingLocation não é inicializada, 
  // porque seu valor virá de um input do front-end.
  // O ! é para dizer ao TypeScript que o valor desta
  // propriedade não será nulo ou indefinido

  @Input() housingLocation!: HousingLocation;
}
