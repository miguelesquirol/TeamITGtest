import * as React from 'react';
import VehicleCard from '../VehicleCard';
import { useState } from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();
  const [vehiclesBundle, setVehiclesBundle] = React.useState([]);


  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }


  setTimeout(function () {
    setVehiclesBundle(vehicles);
  }, 2000);

  console.log(vehiclesBundle[0]);

  var result = vehiclesBundle.filter(x => x.price);

  document.documentElement.style.setProperty('--vehicle-number', result.length);


  return (
    <div data-testid="results">
      <div className="cards">
        <div className="cards-wraper" >
          {result.map(element => <VehicleCard bundle={element} key={element.id} />)}
        </div>
      </div>


      <p>
        Visit
        <a href="/api/vehicles.json" target="_blank"> /api/vehicles.json</a>
        {' '}
        (main endpoint)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_fpace.json" target="_blank">/api/vehicle_fpace.json</a>
        {' '}
        (detail endpoint - apiUrl)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_xf.json" target="_blank">/api/vehicle_xf.json</a>
        {' '}
        (vehicle without any price)
      </p>
    </div >
  );
}
