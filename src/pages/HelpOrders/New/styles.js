import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.View`
  padding: 20px;
`;

export const FormInput = styled(Input).attrs({
  textAlignVertical: 'top',
  multiline: true,
  numberOfLines: 10,
})`
  margin-bottom: 20px;
  min-height: 220px;
`;
