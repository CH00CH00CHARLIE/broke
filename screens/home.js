import React, { Component } from 'react';
import { AppRegistry, Button, View, Stylesheet, Text, Image, ScrollView} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
      <View style={{height: 60, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#393D46'}}>
        <Text style={{textAlignVertical: 'bottom', fontSize: 20, color: 'white', fontWeight: 'bold', fontFamily: 'monospace'}}> broke </Text>
      </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 150, height: 150}} source={{uri: 'https://vega.github.io/vega/examples/img/donut-chart.png'}}/>
          </View>
          <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
            <View style={{height: 85, backgroundColor: '#40abd6', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 0.15}}/>
              <Text style={{flex: 1, textAlignVertical: 'bottom', fontSize: 19, color: 'white', fontWeight: 'bold', fontFamily: 'monospace'}}>Food</Text>
              <View style={{flex: 0.1}}/>
              <View style={{flex: 3, height: 8, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}/>
              <View style={{flex: 0.15}}/>
            </View>
            <View style={{height: 85, backgroundColor: '#338DB1', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 0.15}}/>
              <Text style={{flex: 1, textAlignVertical: 'bottom', fontSize: 19, color: 'white', fontWeight: 'bold', fontFamily: 'monospace'}}>Social</Text>
              <View style={{flex: 0.1}}/>
              <View style={{flex: 3, height: 8, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}/>
              <View style={{flex: 0.15}}/>
            </View>
            <View style={{height: 85, backgroundColor: '#257191', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 0.15}}/>
              <Text style={{flex: 1, textAlignVertical: 'bottom', fontSize: 19, color: 'white', fontWeight: 'bold', fontFamily: 'monospace'}}>Bills</Text>
              <View style={{flex: 0.1}}/>
              <View style={{flex: 3, height: 8, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}/>
              <View style={{flex: 0.15}}/>
            </View>
            <View style={{height: 85, backgroundColor: '#1A607A', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 0.15}}/>
              <Text style={{flex: 1, textAlignVertical: 'bottom', fontSize: 19, color: 'white', fontWeight: 'bold', fontFamily: 'monospace'}}>Leisure</Text>
              <View style={{flex: 0.1}}/>
              <View style={{flex: 3, height: 8, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}/>
              <View style={{flex: 0.15}}/>
            </View>
            <View style={{height: 85, backgroundColor: '#194C61', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 0.15}}/>
              <Text style={{flex: 1, textAlignVertical: 'bottom', fontSize: 19, color: 'white', fontWeight: 'bold', fontFamily: 'monospace'}}>Bribing The Law</Text>
              <View style={{flex: 0.1}}/>
              <View style={{flex: 3, height: 8, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}/>
              <View style={{flex: 0.15}}/>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
