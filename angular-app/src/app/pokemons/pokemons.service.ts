import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAll() {
    // observa o endereço/api
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
}
