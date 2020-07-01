import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const pinsObjects = response.data;
      const pins = [];
      Object.keys(pinsObjects).forEach((pinId) => {
        pinsObjects[pinId].id = pinId;
        pins.push(pinsObjects[pinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

export default { getPins };
