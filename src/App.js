import React, { Component } from 'react';
import StatefulItemList from './components/StatefulItemList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO</h1>
        </header>
        <StatefulItemList />
      </div>
    );
  }
}

export default App;
