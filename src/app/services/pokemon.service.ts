import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonInfoDto } from './dtos/pokemon.dto';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(limit: number): Observable<PokemonInfoDto[]> {
    const url = `https://pokebuildapi.fr/api/v1/pokemon/limit/${limit}`;
    return this.http.get<PokemonInfoDto[]>(url);
  }
}
