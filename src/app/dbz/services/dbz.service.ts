import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  public get personajes():Personaje[] {
    return [...this._personajes];//1
  }

  constructor(){
    console.log('Servicio inicializado');
  }
}
/*
las llaves indican que es un arreglo, los tres puntos indican que es el operador
spread (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Sintaxis_Spread)

*/
