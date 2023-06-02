import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PokemonStateModel, defaultPokemonState } from './pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import {
  LoadPokemonInfo,
  LoadPokemonInfoFailed,
  LoadPokemonInfoSuccess,
} from './pokemon.action';
import { tap, catchError } from 'rxjs';
import { PokemonInfoDto } from '../../services/dtos/pokemon.dto';

@State<PokemonStateModel>({
  name: 'pokemonsInfo',
  defaults: defaultPokemonState,
})
@Injectable()
export class PokemonState {
  constructor(private pokemonService: PokemonService) {}

  @Action(LoadPokemonInfo)
  loadPokemonInfo(
    { dispatch, patchState }: StateContext<PokemonStateModel>,
    { limit }: LoadPokemonInfo
  ) {
    patchState({ loading: true });
    this.pokemonService
      .getPokemons(limit)
      .pipe(
        tap((result: PokemonInfoDto[]) =>
          dispatch(new LoadPokemonInfoSuccess(result))
        ),
        catchError((err) => dispatch(new LoadPokemonInfoFailed(err)))
      )
      .subscribe();
  }

  @Action(LoadPokemonInfoSuccess)
  loadPokemonInfoSuccess(
    { patchState }: StateContext<PokemonStateModel>,
    { result }: LoadPokemonInfoSuccess
  ) {
    patchState({ loading: false, pokemonsList: result });
  }

  @Action(LoadPokemonInfoFailed)
  LoadPokemonInfoFailed(
    { patchState }: StateContext<PokemonStateModel>,
    { error }: LoadPokemonInfoFailed
  ) {
    patchState({ loading: false, errorMessage: JSON.stringify(error) });
  }
}
