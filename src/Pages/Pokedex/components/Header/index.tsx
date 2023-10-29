import React from 'react';
import {HeaderContainer, Title, TitleContainer} from './styles';
//@ts-ignore
import Icon from '../../../../assets/icons/pokeball.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Icon width={34} height={34} />
        <Title>Pokédex</Title>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
