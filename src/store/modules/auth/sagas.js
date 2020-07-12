import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, 'studentsSession', {
      id,
    });

    console.tron.log(response.data);

    const student = response.data;

    yield put(signInSucess(student));
  } catch (error) {
    Alert.alert('Falha na autentificação', 'Aluno não encontrado');
    yield put(signFailure());
  }
}

export function signOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
