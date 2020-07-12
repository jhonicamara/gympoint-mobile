import React from 'react';
import { CheckDate, CheckText, Container } from './styles';


export default function Checkin({ checkin }) {
  return (
    <Container>
      <CheckText>{checkin.title}</CheckText>
      <CheckDate>{checkin.date}</CheckDate>
    </Container>
  );
}
