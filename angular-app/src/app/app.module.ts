import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
   

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsuariosModule,
    PokemonsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
