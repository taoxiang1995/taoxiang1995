import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Config from './config';
import Tab from './components/tab';
import TabsContainer from './containers/TabsContainer';


class App extends Component {

  render() {
    return (
      <div>
        <Header header = {Config.header} body = {Config.body}  />
        <TabsContainer store={this.props.store} />
      </div>

    );
  }
}

export default App;
