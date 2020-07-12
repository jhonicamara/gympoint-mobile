import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const HelpList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
