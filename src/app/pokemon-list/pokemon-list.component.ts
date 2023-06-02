import { Component, Input } from '@angular/core';
import { PokemonInfoDto } from '../services/dtos/pokemon.dto';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  @Input() loading: boolean;
  @Input() pokemonList: PokemonInfoDto[];
}
