import {Dispatch} from 'react';
import {AppAction} from './actions';

interface PokemonSimple {
  name: string;
  url: string;
}

interface AppState {
  pokemonList: PokemonSimple[];
  pokemoFavorites: PokemonSimple[];
}

interface AppContextType {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}

export type {PokemonSimple, AppState, AppContextType};
