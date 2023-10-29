const colors = {
  identity: '#DC0A2D',
  primaryBlack: '#1D1D1D',
  medium: '#666666',
  light: '#E0E0E0',
  background: '#EFEFEF',
  white: '#FFFFFF',
};

const pokemonTypes = {
  identity: '#DC0A2D',
  bug: '#A7B723',
  dark: '#75574C',
  dragon: '#7037FF',
  electric: '#F9CF30',
  fairy: '#E69EAC',
  fighting: '#C12239',
  fire: '#F57D31',
  flying: '#A1BBEC',
  ghost: '#70559B',
  normal: '#AAA67F',
  grass: '#74CB48',
  ground: '#DEC16B',
  ice: '#9AD6DF',
  poison: '#A43E9E',
  phychic: '#FB5584',
  rock: '#B69E31',
  steel: '#B7B9D0',
  water: '#6493EB',
};

export interface AppThemeType {
  colors: typeof colors;
  pokemonTypes: typeof pokemonTypes;
}

export const AppTheme = {
  colors,
  pokemonTypes,
};
