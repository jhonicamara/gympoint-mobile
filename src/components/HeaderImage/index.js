import React from 'react';
import { Image } from 'react-native';
import logoHeader from '~/assets/logoHeader.png';

import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HeaderImage() {

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7} onPress={() => handleSignOut()} >
        <Image source={logoHeader} resizeMode="contain" />
      </TouchableOpacity>
    </Container>
  );
}

export default HeaderImage;
