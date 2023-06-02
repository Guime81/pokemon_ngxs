import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonGlobalComponent } from './pokemon-global/pokemon-global.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonState } from './states/pokedex/pokemon.state';
import { PokemonFilteredState } from './states/pokemonFiltered/pokemon-filtered.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    PokemonListComponent,
    PokemonGlobalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot([PokemonState, PokemonFilteredState], {
      developmentMode: true,
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
