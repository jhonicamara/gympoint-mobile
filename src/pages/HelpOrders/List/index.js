import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { withNavigationFocus } from 'react-navigation';

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';
import Button from '~/components/Button';
import HeaderImage from '~/components/HeaderImage';

import Question from '~/components/Question';

import { Container, HelpList } from './styles';

function HelpOrdersList({ navigation, isFocused }) {
  const student = useSelector(state => state.auth.student);
  const [helpOrders, setHelpOrders] = useState([]);

  async function loadHelpOrders() {
    const response = await api.get(`/students/${student.id}/help-orders`);
    const data = response.data.map(helpOrder => ({
      ...helpOrder,
      createdAt: formatRelative(parseISO(helpOrder.createdAt), new Date(), {
        locale: pt,
        addSufix: false,
      }),
      answerAt: helpOrder.answer_at
        ? formatRelative(parseISO(helpOrder.answer_at), new Date(), {
            locale: pt,
            addSufix: false,
          })
        : null,
    }));

    setHelpOrders(data);
  }

  useEffect(() => {
    loadHelpOrders();
  }, [isFocused]);

  return (
    <>
      <HeaderImage />
      <Background>
        <Container>
          <Button
            onPress={() =>
              navigation.navigate('HelpOrdersNew', { id: student.id })
            }
          >
            Novo pedido de auxílio
          </Button>
          <HelpList
            data={helpOrders}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('HelpOrdersDetail', { item })
                }
              >
                <Question question={item} />
              </TouchableOpacity>
            )}
          />
        </Container>
      </Background>
    </>
  );
}

export default withNavigationFocus(HelpOrdersList);
