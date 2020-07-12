import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  background-color: #fff;

  border: 1px solid #ddd;
  border-radius: 4px;

  margin-bottom: 10px;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AnswerInfo = styled.View`
  flex-direction: row;
`;

export const TextAnswered = styled.Text`
  margin-left: 10px;
  font-weight: bold;

  color: ${props => (props.answered === null ? '#999999' : '#42CB59')};
`;

export const AnswerTime = styled.Text`
  color: #666666;
  font-size: 12px;
  font-weight: bold;
`;

export const QuestionText = styled.Text`
  padding: 15px 0;

  font-size: 14px;
  text-align: justify;
  color: #666666;
  line-height: 26px;
`;
