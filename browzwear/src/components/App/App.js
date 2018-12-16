import React, { Component } from 'react';
import Titles from './../Titles/'
import CSS from './App.css';

class App extends Component {

  render() {
    return (
      <div className={CSS.App}>
          <div className={CSS.Card}>
          <Titles />
          <hr className={CSS.HR}/>
          
          </div>
      </div>
    );
  }
}

export default App;
