import { PokemonInfoDto } from '../../services/dtos/pokemon.dto';

export class LoadPokemonInfo {
  static readonly type = '[PokemonInfo] Load Pokemon information';
  constructor(public limit: number = 250) {}
}

export class LoadPokemonInfoSuccess {
  static readonly type = '[PokemonInfo] Load Pokemon information success';
  constructor(public result: PokemonInfoDto[]) {}
}

export class LoadPokemonInfoFailed {
  static readonly type = '[PokemonInfo] Load Pokemon information failed';
  constructor(public error: any) {}
}
