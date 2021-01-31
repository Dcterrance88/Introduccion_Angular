import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input('nuevoHijo') public nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // @Output() public onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbzService:DbzService){}

  public agregar():void {
    if(this.nuevo.nombre.trim().length === 0){ return; }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    };
  };

}
