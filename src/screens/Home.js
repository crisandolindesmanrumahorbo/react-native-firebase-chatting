import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Button
            onPress={() =>
              this.props.navigation.navigate('Chat Screen', {
                name: 'Sidikalang.id',
              })
            }
            title="Navigate ke ChatScreen"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
