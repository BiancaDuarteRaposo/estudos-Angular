import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';



@NgModule({
  declarations: [
    ListarPokemonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListarPokemonsComponent
    
  ]
})
export class PokemonsModule { }
