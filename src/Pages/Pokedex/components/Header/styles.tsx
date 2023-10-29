import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  padding: 12px;
  height: 110px;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 24px;
  font-weight: bold;
  font-family: Poppins;
  margin-left: 8px;
`;
