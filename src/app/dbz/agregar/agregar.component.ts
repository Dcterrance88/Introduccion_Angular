import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input('nuevoHijo') public nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() public onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  public agregar():void {
    if(this.nuevo.nombre.trim().length === 0){ return; }
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre:'',
      poder:0
    };
  }
}

/*
la anotacion @Output es utilizado cuando se tiene un componente hijo el cual necesita
emitir un valor al padre, esta anotacios va a ser referencia a una propiedad que va a
ser de tipo EventEmitter el cual sera igual a una instancia de este tipo el cual hara referencia
a un generico que en este caso sera de tipo Personaje ya que es el objeto literal que
queremos emitir, luego en el metodo usando este objeto llamamos al metod emit y pasamos el
objeto a emitir que es nuevo
ahora para trabajar este evento dentro de la etiquea app-agregar agregamos el evento creado
onNuevoPersonaje dentro de () el cual llamara cuando se dispara la funcion agregarNuevoPersonaje($event)
el cual el evento sera de tipo personaje porque asi se definio en el componente hijo
que estara en el componente ts main-page


*/
