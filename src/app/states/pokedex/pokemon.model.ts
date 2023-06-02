import { PokemonInfoDto } from '../../services/dtos/pokemon.dto';

export interface PokemonStateModel {
  loading: boolean;
  errorMessage: string;
  pokemonsList: PokemonInfoDto[];
}

export const defaultPokemonState: PokemonStateModel = {
  loading: true,
  errorMessage: undefined,
  pokemonsList: [],
};
