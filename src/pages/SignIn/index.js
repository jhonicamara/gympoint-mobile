import React, { useState } from 'react';
import { Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispath = useDispatch();
  const [userId, setUserId] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispath(signInRequest(3));
  }

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          selectionColor="#f94d6a"
          keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe o seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={userId}
          onChangeText={setUserId}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
