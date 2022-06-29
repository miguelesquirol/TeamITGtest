import * as React from 'react';
import VehicleCard from '../VehicleCard';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();
  const [vehiclesBundle, setVehiclesBundle] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // TODO CLEAN THE SETTIME OUT

  setTimeout(() => {
    setVehiclesBundle(vehicles); setIsLoading(false);
  }, 2000);

  // CREATES A NEW ARRAY WITH THE CARS ONLY WITH EXISTING PRICE
  const result = vehiclesBundle.filter((x) => x.price);

  // CREATES A CSS VARIABLE OF NUMBER OF VEHICLES
  document.documentElement.style.setProperty('--vehicle-number', result.length);

  return (
    <div data-testid="results">

      {isLoading ? 'Loading' : ''}

      <div className="cards">
        <div className="cards-wraper">
          {result.map((element) => <VehicleCard bundle={element} key={element.id} />)}
        </div>
      </div>

      <p>
        Visit
        <a href="/api/vehicles.json" target="_blank"> /api/vehicles.json</a>
        (main endpoint)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_fpace.json" target="_blank">/api/vehicle_fpace.json</a>
        (detail endpoint - apiUrl)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_xf.json" target="_blank">/api/vehicle_xf.json</a>
        (vehicle without any price)
      </p>
    </div>
  );
}
