
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native';
//import * as API from  './notificationUtils'
import OneSignal from 'react-native-onesignal';

class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={'black'}
        style={styles.button}
        onPress={this.props.onPress}>
        <Text style={styles.buttonLabel}>
          {this.props.label}
        </Text>
      </TouchableHighlight>
    );
  }
}


class App extends Component {

  componentDidMount() {
    OneSignal.configure({
      onIdsAvailable: function(device) {
        console.log('UserId = ', device.userId);
        console.log('PushToken = ', device.pushToken);
      },
      onNotificationReceived: function(notification) {
        
        console.log('NOTIFICATION RECEIVED: ', notification);
        console.log(notification.payload.additionalData.project_keyword_value);
      },
    });

    permissions = {
        alert: false,
        badge: true,
        sound: true
    };
    OneSignal.requestPermissions(permissions);

    OneSignal.checkPermissions((permissions) => {
      console.log(permissions);
    });

  }

  unSub() {
    OneSignal.setSubscription(false);
    console.log('unsub');
  }

  Sub() {
    OneSignal.setSubscription(true);
    console.log('sub');
  }

  // upAppId() {
  //   API.upAppId('admin@orm.vn','1b4727a96eb05921e68228341642b529','xyzxxx','108')
  // }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.unSub}
          label="unSubcribe"
        />

        <Button
          onPress={this.Sub}
          label="Subcribe"
        />

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
