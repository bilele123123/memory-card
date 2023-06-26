import React, { Component } from 'react';
import './assets/maplestory.otf';
import Header from './components/Header';
import Main from './components/Main';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    );  
  }
}

export default App;
