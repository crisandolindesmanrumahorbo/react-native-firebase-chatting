import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ChatScreen from '../screens/ChatScreen';

const AppStackNavigation = () => {
  const {Screen, Navigator} = createStackNavigator();

  return (
    <>
      <Navigator headerMode="none">
        <Screen name="Home" component={Home} />
        <Screen name="Chat Screen" component={ChatScreen} />
      </Navigator>
    </>
  );
};

export default AppStackNavigation;
