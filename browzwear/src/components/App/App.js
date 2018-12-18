import React, { Component } from 'react';
import Titles from './../Titles/'
import CSS from './App.css';
import DataSelect from './DataSelect'
import MapContainer from './../Map'
class App extends Component {

  render() {
    return (
      <div className={CSS.App}>
          <div className={CSS.Card}>
            <Titles />
            <hr className={CSS.HR}/>
            <div className={CSS.Container}>
              <DataSelect type="Country"/>
              <DataSelect type="City" filterBy="Country"/>
              <DataSelect type= "Id" filterBy="City"/>
              <MapContainer/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
