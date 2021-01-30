import { Component} from '@angular/core';

interface Personaje {
  nombre: String;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  public nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  public agregar():void {
    console.log(this.nuevo);
  }

  public cambiarNombre(event:any):void {
    console.log(event.target.value);
  }

}

