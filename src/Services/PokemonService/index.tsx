import {PokemonIndexResponse} from './types';

class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  public async getPokemonList(): Promise<PokemonIndexResponse> {
    const response = await fetch(
      `${this.baseUrl}pokemon?limit=100000&offset=0`,
    );
    const data = await response.json();
    return data;
  }
}

export default new PokemonService();
