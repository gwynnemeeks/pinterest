import axios from 'axios';
import apiKeys from './apiKeys.json';

// get all pins for a board with a specific  board uid
// return as an array of objects, not an object of objects

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPinsFromBoardUid = (boardUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardUid}"`)
    .then((response) => {
      const boardPins = response.data;

      resolve(boardPins);
    })
    .catch((err) => reject(err));
});

export default { getPinsFromBoardUid };
