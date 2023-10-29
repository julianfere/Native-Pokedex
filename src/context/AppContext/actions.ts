import {PokemonSimple} from './types';

enum AppActionType {
  SET_POKEMON_LIST = 'SET_POKEMON_LIST',
  SET_POKEMON_FAVORITE = 'SET_POKEMON_FAVORITE',
}

interface SetPokemonListAction {
  type: AppActionType.SET_POKEMON_LIST;
  payload: PokemonSimple[];
}

interface SetPokemonFavoriteAction {
  type: AppActionType.SET_POKEMON_FAVORITE;
  payload: PokemonSimple[];
}

const setPokemonList = (payload: PokemonSimple[]) => {
  return {
    type: AppActionType.SET_POKEMON_LIST,
    payload,
  };
};

type AppAction = SetPokemonListAction | SetPokemonFavoriteAction;

export {AppActionType, setPokemonList};
export type {AppAction};
