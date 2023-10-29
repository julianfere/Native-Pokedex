import React from 'react';
import {PokemonSimple} from '../../../../context/AppContext/types';
import {Container, Id, Name, PokemonImage} from './styles';
import StringUtils from '../../../../Utils/StringUtils';

interface PokemonListItemProps {
  pokemon: PokemonSimple;
}

const PokemonListItem = ({pokemon}: PokemonListItemProps) => {
  const id = pokemon.url.split('/')[6].toString().padStart(3, '0');

  return (
    <Container>
      <Id>#{id}</Id>
      <PokemonImage
        source={{
          uri: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLocaleLowerCase()}.gif`,
        }}
        resizeMode={'contain'}
      />
      <Name>{StringUtils.capitalize(pokemon.name)}</Name>
    </Container>
  );
};

export default PokemonListItem;
