import { Action, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
  PokemonFilteredStateModel,
  defaultPokemonFilteredState,
} from './pokemon-filtered.model';
import {
  FilteredPokemon,
  NewSearchValue,
  ResetInputAndSearchValue,
} from './pokemon-filtered.action';
import { PokemonSelectors } from '../pokedex/pokemon.selectors';
import { LoadPokemonInfoSuccess } from '../pokedex/pokemon.action';

@State<PokemonFilteredStateModel>({
  name: 'pokemonsFiltered',
  defaults: defaultPokemonFilteredState,
})
@Injectable()
export class PokemonFilteredState {
  constructor(private store: Store) {}

  @Action(NewSearchValue)
  newSearchValue(
    { dispatch, patchState }: StateContext<PokemonFilteredStateModel>,
    { newSearchValue }: NewSearchValue
  ) {
    if (newSearchValue.length <= 4) {
      patchState({ searchValue: newSearchValue });
      console.log('@Action NewSearchValue: ' + newSearchValue);
      dispatch(new FilteredPokemon());
    } else {
      patchState({ ready: false });
    }
  }

  @Action(FilteredPokemon)
  filteredPokemon({
    dispatch,
    patchState,
    getState,
  }: StateContext<PokemonFilteredStateModel>) {
    const { searchValue } = getState();
    // patchState({ ready: true });
    const pokemonList = this.store.selectSnapshot(PokemonSelectors.pokemonList);
    console.log(pokemonList);
    const filterd = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    patchState({ pokemonsFilteredList: filterd });
  }

  @Action(LoadPokemonInfoSuccess)
  loadPokemonInfoSuccess({
    patchState,
  }: StateContext<PokemonFilteredStateModel>) {
    patchState({ ready: true });
  }

  @Action(ResetInputAndSearchValue)
  resetInputAndSearchValue({
    patchState,
  }: StateContext<PokemonFilteredStateModel>) {
    patchState({ ready: true, searchValue: '' });
  }
}
