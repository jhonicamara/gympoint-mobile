import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';

import HelpOrdersList from '~/pages/HelpOrders/List';
import HelpOrdersNew from '~/pages/HelpOrders/New';
import HelpOrdersDetail from '~/pages/HelpOrders/Detail';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            ['Pedir Ajuda']: {
              screen: createStackNavigator(
                {
                  HelpOrdersList,
                  HelpOrdersNew,
                  HelpOrdersDetail,
                },
                {
                  defaultNavigationOptions: {
                    headerShown: false,
                  },
                }
              ),
              navigationOptions: {
                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={25} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                height: 60,
                backgroundColor: '#fff',
                paddingTop: 5,
                paddingBottom: 5,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
