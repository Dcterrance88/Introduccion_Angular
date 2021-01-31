import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  constructor(private dbzService:DbzService){

  }

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  public nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  public agregarNuevoPersonaje(personaje:Personaje):void {
    // debugger;
    this.personajes.push(personaje);
  }

}
/*
en el constructor se acaba de hacer una injeccion de dependencias
*/

