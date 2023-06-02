export class FilteredPokemon {
  static readonly type = '[PokemonFiltered] Filter Pokemon';
  constructor() {}
}

export class NewSearchValue {
  static readonly type = '[PokemonFiltered] New Search Value';
  constructor(public newSearchValue: string) {}
}

export class ResetInputAndSearchValue {
  static readonly type = '[PokemonFiltered] Reset Input And Search Value';
  constructor() {}
}
