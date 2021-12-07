import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private varPokemonsList: HttpClient) {}

  ngOnInit(): void {
    this.varPokemonsList
      .get('https://pokeapi.co/api/v2/pokemon')
      .subscribe((dados) => {
        this.pokemons = dados;
      });
  }
}
