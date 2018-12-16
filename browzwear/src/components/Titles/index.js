import React, { Component } from 'react';
import CSS from './style.css';

const Titles = (props) => {
  return <div className={CSS.Container}>
            <font className={CSS.Countries}>Countries</font>
            <font className={CSS.Cities}>Cities</font>
            <font className={CSS.Companies}>Companies</font>
            <font className={CSS.Map}>Map</font>
        </div>
};
export default Titles;