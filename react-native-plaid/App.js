import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlaidAuthenticator from 'react-native-plaid-link';
var PUBLIC_TOKEN = null;
export default class App extends React.Component {
  render() {
    return <PlaidAuthenticator
      onMessage={this.onMessage}
      publicKey='ac25fbf77a17846194a680a183096a'
      env="sandbox"
      product="auth,transactions"
      clientName="Broke"
    />
  }
  onMessage = (data) => {
    this.setState({data})
    if (data.action == "plaid_link-undefined::connected") {
      console.log(data.metadata.public_token)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
