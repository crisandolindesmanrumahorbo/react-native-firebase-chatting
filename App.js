import React, {Component} from 'react';
import {initApi} from './src/services/api';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppStackNavigation from './src/navigations/AppStackNavigation';
import {NavigationContainer} from '@react-navigation/native';

export default class extends Component {
  componentWillMount() {
    initApi();
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <AppStackNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8566aa',
  },
});
