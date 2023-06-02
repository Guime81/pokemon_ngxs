import { PokemonInfoDto } from '../../services/dtos/pokemon.dto';

export interface PokemonFilteredStateModel {
  ready: boolean;
  searchValue: string;
  pokemonsFilteredList: PokemonInfoDto[];
}

export const defaultPokemonFilteredState: PokemonFilteredStateModel = {
  ready: false,
  searchValue: '',
  pokemonsFilteredList: [],
};
