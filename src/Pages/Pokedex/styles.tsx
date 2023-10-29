import styled from 'styled-components/native';

export const PokedexContainer = styled.View`
  padding: 4px;
  background-color: ${({theme}) => theme.colors.identity};
`;

export const PokemonList = styled.FlatList`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 8px;
  height: 85.8%;
`;
