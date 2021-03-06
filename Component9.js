/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Alert, View} from 'react-native';

export default class Component9 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {active: false};
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe(){
    this.setState(oldState=>{
      return {active: !oldState.active}
    })
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Button title={this.state.active ? 'Active' : 'InActive'} onPress={this.clickMe} />
      </View>
    );
  }
}


  


