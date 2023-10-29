import {PokemonSimple} from '../../context/AppContext/types';

export interface PokemonIndexResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonSimple[];
}
