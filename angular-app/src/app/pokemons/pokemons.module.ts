import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';
import { DetalhePokemonsComponent } from './detalhe-pokemons/detalhe-pokemons.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListarPokemonsComponent, DetalhePokemonsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PokemonsRoutingModule,
    NgxPaginationModule,
  ],
  exports: [ListarPokemonsComponent],
})
export class PokemonsModule {}
