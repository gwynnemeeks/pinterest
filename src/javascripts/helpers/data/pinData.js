import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const pinsObjects = response.data;
      const pins = [];
      Object.keys(pinsObjects).forEach((boardId) => {
        pinsObjects[boardId].id = boardId;
        pins.push(pinsObjects[boardId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getPinsFromBoardUid = (pins) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${pins}"`)
    .then((response) => {
      const boardPins = response.data;

      resolve(boardPins);
    })
    .catch((err) => reject(err));
});

export default { getPins, getPinsFromBoardUid };
