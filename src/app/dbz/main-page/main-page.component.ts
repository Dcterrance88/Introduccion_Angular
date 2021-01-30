import { Component} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  public agregar() {
    console.log('Heyy - Funcion Agregar con ngSubmit');
  }

}
/*

public agregar(event:any) {
    event.preventDefault(); // 1
    console.log('Heyy - Funcion Agregar');
  }

  $event: es de interes recibir el evento que se esta disparando, en este caso todo
            el evento del formulario, caso parecido al (click) que puede recibir el
            evento que eso incluye las cordenadas donde se hizo el click en el boton,
            donde se encuentra fisicamente el boton, etc.
            en pocas palabras se interpreta como "Quiero el evento que está disparando
            ese evento"

<-- prevee el comportamiento por defecto que tiene el submit de un form (no hace refresh del navegador web).
*/
