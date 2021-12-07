import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';
import { DetalhePokemonsComponent } from './detalhe-pokemons/detalhe-pokemons.component';
import { UsuariosModule } from '../usuarios/usuarios.module';

@NgModule({
  declarations: [ListarPokemonsComponent, DetalhePokemonsComponent],
  imports: [CommonModule, UsuariosModule],
  exports: [ListarPokemonsComponent],
})
export class PokemonsModule {}
