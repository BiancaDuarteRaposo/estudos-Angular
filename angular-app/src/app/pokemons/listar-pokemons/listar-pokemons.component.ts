import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
@Component({
  selector: 'app-listar-pokemons',
  templateUrl: './listar-pokemons.component.html',
  styleUrls: ['./listar-pokemons.component.css'],
})
export class ListarPokemonsComponent implements OnInit {
  pokemons: any = null;
  pokemonSelecionadoPai: any = null;

  diaDeHoje = new Date();
  onSelecionarClick(dados: any) {
    this.pokemonSelecionadoPai = dados;
  }
  receberIdFilho(variavel: any) {
    alert('O ID do Filho é ' + variavel);
  }

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((dados: any) => {
      this.pokemons = dados;
    });
  }
}
