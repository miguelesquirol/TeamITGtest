import React from 'react';
import ReactDOM from 'react-dom';
import VehicleList from './components/VehicleList';
import './assets/style/_global-styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <VehicleList />
  </React.StrictMode>,
  document.querySelector('.root')
);
