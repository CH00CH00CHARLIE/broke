import React, { Component } from 'react';
import { AppRegistry, Button, View, Stylesheet, Text, Image, ScrollView} from 'react-native';

export default class graphs extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
      <View style={{height: 60, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#393D46'}}>
        <Text style={{textAlignVertical: 'bottom', fontSize: 20, color: 'white', fontWeight: 'bold', fontFamily: 'monospace'}}> broke </Text>
      </View>
        <View style={{flex: 1}}>
        </View>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
