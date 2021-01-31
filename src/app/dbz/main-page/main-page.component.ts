import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

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
    this.personajes.push(personaje);
  }
}
/*
como se emite un evento de tipo personaje en la clase hijo este sera el parametro
de la funcion agregarNuevoPersonaje y asi podra almacenar dicho objeto en el array de
objetos literales
*/

