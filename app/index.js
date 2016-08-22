import React, { Component } from 'react';

import { Actions, Scene, Router } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen.react';
import ChatScreen from './screens/ChatScreen.react';

export default class App extends Component {
  render(){
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene type="replace" key="login" component={LoginScreen} initial={true} panHandlers={null}/>
          <Scene type="replace" key="chat" component={ChatScreen} panHandlers={null}/>
        </Scene>
      </Router>
    );
  }
}
