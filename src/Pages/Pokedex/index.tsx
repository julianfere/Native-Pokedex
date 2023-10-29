/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import useApp from '../../hooks/useApp';
import PokemonService from '../../Services/PokemonService';
import {setPokemonList} from '../../context/AppContext/actions';
import PokemonListItem from './components/PokemonListItem';
import {PokedexContainer, PokemonList} from './styles';
import {PokemonSimple} from '../../context/AppContext/types';
import Header from './components/Header';

const Pokedex = () => {
  const {
    state: {pokemonList},
    dispatch,
  } = useApp();

  useEffect(() => {
    PokemonService.getPokemonList().then(response => {
      dispatch(setPokemonList(response.results));
    });
  }, [dispatch]);

  return (
    <PokedexContainer>
      <Header />
      <PokemonList<any>
        data={pokemonList}
        numColumns={3}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
          width: '100%',
        }}
        renderItem={(item: {item: PokemonSimple}) => (
          <PokemonListItem pokemon={item.item} />
        )}
      />
    </PokedexContainer>
  );
};

export default Pokedex;
