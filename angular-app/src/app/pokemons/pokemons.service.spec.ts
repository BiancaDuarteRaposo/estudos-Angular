import { TestBed } from '@angular/core/testing';

import { PokemonsService } from './pokemons.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonService', () => {
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonsService],
    });
    service = TestBed.inject(PokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('retornar uma coleção de pokemons', () => {
      //given (cenário)
      const pokemonResponse = {
        count: 1118,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
        previous: null,
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
        ],
      };
      //execução
      service.getAll().subscribe((res: any) => {
        //validação
        expect(res).toEqual(pokemonResponse);
      });
    });
  });
});
