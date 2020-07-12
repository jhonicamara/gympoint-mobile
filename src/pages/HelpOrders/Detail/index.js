import React from 'react';

import Background from '~/components/Background';
import HeaderImage from '~/components/HeaderImage';

import {
  Container,
  Card,
  HeaderInfo,
  StrongText,
  AnswerTime,
  Question,
  Answer,
} from './styles';

export default function HelpOrdersDetail({ navigation }) {
  const question = navigation.getParam('item');

  return (
    <>
      <HeaderImage />
      <Background>
        <Container>
          <Card>
            <HeaderInfo>
              <StrongText>PERGUNTA</StrongText>
              <AnswerTime>
                {question.answerAt ? question.answerAt : question.createdAt}
              </AnswerTime>
            </HeaderInfo>
            <Question>{question.question}</Question>
            <StrongText>RESPOSTA</StrongText>
            <Answer>
              {question.answer ? question.answer : 'Sem resposta'}
            </Answer>
          </Card>
        </Container>
      </Background>
    </>
  );
}
