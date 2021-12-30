import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllP(offset: number, limit: number) {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
  }
  getAll() {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?offset=20&limit=40`
    );
  }

}
