// eslint-disable-next-line no-unused-vars
import axios, { get } from 'axios';

const url = ('/api/vehicles.json');
let vehicles = {};
const bundle = [];

// /**
//  * Pull vehicles information
//  *
//  * @return {Promise<Array.<vehicleSummaryPayload>>}
//  */
// // TODO: All API related logic should be made inside this function.

function getVehicleInfo(res, i) {
  const vehicle3 = { ...vehicles[i], ...res }
  bundle.push(vehicle3);
}

function fetchVehicleData(urlvar, i) {
  axios.get(urlvar)
    .then((response) => {
      const { data } = response;
      getVehicleInfo(data, i);
      return data
    })
    .catch((err) => {
      console.log('Error: ', err);
    })
}

function vehiclesLoop() {
  function loopVehicles(item, index) {
    fetchVehicleData(item.apiUrl, index);
  }
  vehicles.forEach(loopVehicles);
}

const getVehicles = (data) => {
  vehicles = data;
  vehiclesLoop();
  return vehicles;
}

function fetchData(urlvar) {
  axios.get(urlvar)
    .then((response) => {
      const { data } = response;
      return data
    })
    .then(getVehicles)
    .catch((err) => {
      console.log('Error: ', err);
    });
}

fetchData(url);

console.log("bundle", bundle)

export default async function getData() {
  return bundle;
}
