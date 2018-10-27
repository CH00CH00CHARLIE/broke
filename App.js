import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import GraphsScreen from './screens/graphs';
import BudgetingScreen from './screens/budgeting';
import SettingsScreen from './screens/setting';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default createBottomTabNavigator({
  Home: HomeScreen,
  Graphs: GraphsScreen,
  Budget: BudgetingScreen,
  Setting: SettingsScreen
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-home`;
        } else if (routeName === 'Graphs') {
          iconName = `md-pie`;
        } else if (routeName === 'Budget') {
          iconName = `logo-usd`;
        } else if (routeName === 'Setting') {
          iconName = `md-settings`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#393D46',
      inactiveTintColor: 'gray',
      showLabel: false
    },
  }
);
