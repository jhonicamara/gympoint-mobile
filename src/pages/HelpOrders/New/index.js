import React, { useState } from 'react';
import { Alert } from 'react-native';
import Button from '~/components/Button';

import api from '~/services/api';

import { Container, FormInput } from './styles';

export default function HelpOrdersNew({ navigation }) {
  const student = navigation.getParam('id');
  const [helpOrder, sethelpOrder] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`/students/${student}/help-orders`, {
        question: helpOrder,
      });
      Alert.alert(
        'Pedido de auxílio enviado!',
        'Logo você receberá a resposta'
      );
      navigation.navigate('HelpOrdersList');
    } catch (error) {
      Alert.alert('Ocorreu um erro!', 'Tente novamente mais tarde');
    }
  }

  return (
    <Container>
      <FormInput
        selectionColor="#f94d6a"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Inclua seu pedido de auxílio"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={helpOrder}
        onChangeText={sethelpOrder}
      />
      <Button onPress={() => handleSubmit()}>Enviar Pedido</Button>
    </Container>
  );
}
