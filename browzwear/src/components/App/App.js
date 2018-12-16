import React, { Component } from 'react';
import clients from './../../clients.json'
import CSS from './App.css';

class App extends Component {
  constructor(props){
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className={CSS.App}>
          <div className={CSS.Card}></div>
      </div>
    );
  }
}

export default App;
