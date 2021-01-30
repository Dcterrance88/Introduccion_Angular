import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  exports:[
    ListadoComponent
  ],
  imports:[
    CommonModule
  ]

})
export class HeroesModule{

}

/*
  declarations: las declaraciones es un arreglo el cual dice que cosas contiene este modulo, por
  ejemplo que componentes, pipes, etc. en pocas palabras van a ser los componentes que tenemos en
  este caso dentro del directorio de heroes

  exports: son los componentes que queremos hacer publicos o visibles fuera de este modulo

  imports: usualmente dentro de el van modulos, son objetos que se colocan dentro de los imports

*/
