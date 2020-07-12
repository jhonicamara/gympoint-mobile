import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import HeaderImage from '~/components/HeaderImage';
import Background from '~/components/Background';
import Button from '~/components/Button';
import Checkin from '~/components/Checkin';

import api from '~/services/api';

import { Container, CheckinList } from './styles';

export default function Dashboard() {
  const student = useSelector(state => state.auth.student);
  const [checkins, setCheckins] = useState([]);

  async function loadCheckins() {
    const response = await api.get(`/students/${student.id}/checkins`);
    const data = response.data.map(checkin => ({
      ...checkin,
      title: `Check-in #${checkin.id}`,
      date: formatRelative(parseISO(checkin.createdAt), new Date(), {
        locale: pt,
      }),
    }));
    setCheckins(data);
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  async function handleButton() {
    try {
      await api.post(`/students/${student.id}/checkins`);
      Alert.alert('Checkin realizado', 'Bora treinar!!!');
      loadCheckins();
    } catch (error) {
      Alert.alert('Ocorreu um erro!', 'Tente novamente mais tarde');
    }
  }

  return (
    <>
      <HeaderImage />
      <Background>
        <Container>
          <Button onPress={handleButton}>Novo Check-in</Button>
          <CheckinList
            data={checkins}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Checkin checkin={item}></Checkin>}
          />
        </Container>
      </Background>
    </>
  );
}

function SubmitIcon({ tintColor }) {
  return <Icon name="edit-location" size={25} color={tintColor} />;
}

SubmitIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: SubmitIcon,
};
