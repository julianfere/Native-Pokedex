import {AppAction, AppActionType} from './actions';
import {AppState} from './types';

const AppReducer = (state: AppState, actions: AppAction): AppState => {
  switch (actions.type) {
    case AppActionType.SET_POKEMON_LIST:
      return {...state, pokemonList: actions.payload};
    case AppActionType.SET_POKEMON_FAVORITE:
      return {...state, pokemoFavorites: actions.payload};
    default:
      return actions;
  }
};

export {AppReducer};
