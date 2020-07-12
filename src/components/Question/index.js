import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  HeaderInfo,
  AnswerInfo,
  TextAnswered,
  AnswerTime,
  QuestionText,
} from './styles';

export default function Question({ question }) {
  return (
    <Container>
      <HeaderInfo>
        <AnswerInfo>
          <Icon
            name="check-circle"
            size={20}
            color={question.answerAt ? '#42CB59' : '#999999'}
          />
          <TextAnswered answered={question.answerAt}>
            {question.answerAt ? 'Respondida' : 'Sem Resposta'}
          </TextAnswered>
        </AnswerInfo>
        <AnswerTime>
          {question.answerAt ? question.answerAt : question.createdAt}
        </AnswerTime>
      </HeaderInfo>
      <QuestionText>{question.question}</QuestionText>
    </Container>
  );
}
