import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  FilteredPokemon,
  NewSearchValue,
  ResetInputAndSearchValue,
} from '../states/pokemonFiltered/pokemon-filtered.action';
import { PokemonSelectors } from '../states/pokedex/pokemon.selectors';
import { Observable, Subscription } from 'rxjs';
import { PokemonInfoDto } from '../services/dtos/pokemon.dto';
import { PokemonFilteredSelectors } from '../states/pokemonFiltered/pokemon-filtered.selectors';
import { LoadPokemonInfo } from '../states/pokedex/pokemon.action';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-global',
  templateUrl: './pokemon-global.component.html',
  styleUrls: ['./pokemon-global.component.css'],
})
export class PokemonGlobalComponent implements OnInit, OnDestroy {
  @Select(PokemonFilteredSelectors.ready) $ready: Observable<boolean>;
  @Select(PokemonFilteredSelectors.newSearchValue)
  $searchValue: Observable<string>;
  @Select(PokemonSelectors.loading) $loading: Observable<boolean>;
  @Select(PokemonFilteredSelectors.pokemonFilteredList)
  $pokemonsFilteredList: Observable<PokemonInfoDto[]>;

  constructor(private store: Store) {}

  private pokemonSubscription: Subscription = undefined;

  ngOnInit(): void {
    this.store.dispatch(new LoadPokemonInfo());
  }

  searchPokemon(newSearchValue: string) {
    // this.store.dispatch(new FilteredPokemon(searchValue));
    this.store.dispatch(new NewSearchValue(newSearchValue));
    console.log('searchPokemon(): ' + newSearchValue);
  }

  resetInputAndSearchValue() {
    this.store.dispatch(new ResetInputAndSearchValue());
  }

  ngOnDestroy(): void {
    this.pokemonSubscription.unsubscribe();
    this.pokemonSubscription = undefined;
  }
}
