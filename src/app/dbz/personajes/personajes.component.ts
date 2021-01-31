import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  @Input('personajesHijo') public personajes: Personaje [] = [];

}
/*
cuando colocamos la anotacion "@Input" en el arreglo de objetos, le decimos a angular q
este input van a venir desde el componente padre, para que funcione, donde estamos
conocando la referencia del componente hijo se añade "[personajes]=personajes" en el sentido que
los personajes declarados en el componente hijo [personajes] van a ser referencia a los personajes
del componente padre que en este caso tambien se llaman igual.

    <app-personajes [personajes]="personajes">
    </app-personajes>

si se quiere evitar la redundancia se puede añadir un alias dentro de la anotacion input ente comillas simples

@Input('personajesHijo') public personajes:any [] = [];

<app-personajes [personajesHijo]="personajes">
</app-personajes>

como la interface que hace referencia al arreglo de objetos literales personaje esta en el componente padre
se crea un directorio con el nombre de interface y se almacena con el fin que pueda hacer referencia tanto
en el componente padre como en el hijo.
*/
