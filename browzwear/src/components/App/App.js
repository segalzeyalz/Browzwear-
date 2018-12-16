import React, { Component } from 'react';
import clients from './../../clients.json'
import Titles from './../Titles/'
import CSS from './App.css';

class App extends Component {

  render() {
    return (
      <div className={CSS.App}>
          <div className={CSS.Card}>
          <Titles />
          <hr className={CSS.HR}/>
          <select>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
          </select>
          <select>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
          </select><select>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
            <option>dddddddddddddddddd</option>
          </select>
          </div>
      </div>
    );
  }
}

export default App;
