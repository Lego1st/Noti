
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

import OneSignal from 'react-native-onesignal';

class App extends Component {

  componentDidMount() {
    OneSignal.configure({
      onIdsAvailable: function(device) {
        console.log('UserId = ', device.userId);
        console.log('PushToken = ', device.pushToken);
      }
    });
    OneSignal.checkPermissions((permissions) => {
      console.log(permissions);
    });

    // permissions = {
    //     alert: true,
    //     badge: true,
    //     sound: true
    // };
    // OneSignal.requestPermissions(permissions);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the OneSignal Example!
        </Text>
        <Text style={styles.instructions}>
          Using {Platform.OS}? Cool.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
