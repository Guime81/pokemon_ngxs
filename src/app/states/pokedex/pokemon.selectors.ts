import { Selector } from '@ngxs/store';
import { PokemonStateModel } from './pokemon.model';
import { PokemonState } from './pokemon.state';
import { PokemonInfoDto } from '../../services/dtos/pokemon.dto';

export class PokemonSelectors {
  @Selector([PokemonState])
  static loading(state: PokemonStateModel): boolean {
    return state.loading;
  }

  @Selector([PokemonState])
  static pokemonList(state: PokemonStateModel): PokemonInfoDto[] {
    return state.pokemonsList;
  }
}
