import { Selector } from '@ngxs/store';
import { PokemonInfoDto } from '../../services/dtos/pokemon.dto';
import { PokemonFilteredStateModel } from './pokemon-filtered.model';
import { PokemonFilteredState } from './pokemon-filtered.state';

export class PokemonFilteredSelectors {
  @Selector([PokemonFilteredState])
  static pokemonFilteredList(
    state: PokemonFilteredStateModel
  ): PokemonInfoDto[] {
    return state.pokemonsFilteredList;
  }

  @Selector([PokemonFilteredState])
  static ready(state: PokemonFilteredStateModel): boolean {
    return state.ready;
  }

  @Selector([PokemonFilteredState])
  static newSearchValue(state: PokemonFilteredStateModel): string {
    return state.searchValue;
  }
}
