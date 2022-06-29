import axios from 'axios';

const url = ('/api/vehicles.json');
let vehicles = {};
const bundle = [];

// /**
//  * Pull vehicles information
//  *
//  * @return {Promise<Array.<vehicleSummaryPayload>>}
//  */
// // TODO: All API related logic should be made inside this function.

// PUSHES THE DATA OF THE SPECIFIC VEHICLE INTO A GENERAL OBJECT

function getVehicleInfo(res, i) {
  const vehicle = { ...vehicles[i], ...res };
  bundle.push(vehicle);
}

// IT FETCH THE DATA OF THE SPECIFIC VEHICLES
function fetchVehicleData(urlvar, i) {
  axios.get(urlvar)
    .then((response) => {
      const { data } = response;
      getVehicleInfo(data, i);
      return data;
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
}

// IT LOOPS ON THE EXISITING CARDS AND TAKES THE ITEM API

function vehiclesLoop() {
  function loopVehicles(item, index) {
    fetchVehicleData(item.apiUrl, index);
  }
  vehicles.forEach(loopVehicles);
}

// STORES THE RESULT AND CALLS THE LOOP OF INDIVIDUAL CARS

const getVehicles = (data) => {
  vehicles = data;
  vehiclesLoop();
  return vehicles;
}

// DOES THE FIRST CALL TO THE API

function fetchData(urlvar) {
  axios.get(urlvar)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .then(getVehicles)
    .catch((err) => {
      console.log('Error: ', err);
    });
}

fetchData(url);

export default async function getData() {
  return bundle;
}
