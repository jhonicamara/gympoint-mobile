import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 25px;
`;

export const Card = styled.View`
  padding: 20px;
  background-color: #fff;

  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StrongText = styled.Text`
  color: #444444;
  font-size: 16px;
  font-weight: bold;
`;

export const AnswerTime = styled.Text`
  color: #666666;
  font-size: 12px;
  font-weight: bold;
`;

export const Question = styled.Text`
  color: #666666;
  padding: 15px 0;
`;

export const Answer = styled.Text`
  color: #666666;
  padding-top: 15px;
`;
