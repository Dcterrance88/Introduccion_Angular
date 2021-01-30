import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
declarations:  es la parte donde generalmente van los componentes
importa: es la parte donde se van a colocar otros modulos
providers: son masomenos como servicios, especificos a un modulo
bootstrap: es porque este es un componente principal, el que se quiere lanzar primero

*/
