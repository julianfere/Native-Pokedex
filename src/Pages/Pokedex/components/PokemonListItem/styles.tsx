import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const PokemonImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Id = styled.Text`
  color: ${({theme}) => theme.colors.medium};
  align-self: flex-end;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.primaryBlack};
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  font-family: Poppins;
`;
