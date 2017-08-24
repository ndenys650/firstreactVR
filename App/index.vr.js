import React from 'react';
import {
  AppRegistry,
  Pano,
  View,
  asset,
  Text
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text 
          style={{
            transform: [{ translateZ: .5 }]
          }}
          >
          Hello Nate!
          </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
