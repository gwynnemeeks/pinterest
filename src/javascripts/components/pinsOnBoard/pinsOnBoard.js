import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const buildPinsOnBoard = (e) => {
  const boardId = e.target.closest('.board-card').id;
  console.error('am I getting it', boardId);
  pinData.getPins(boardId)
    .then((response) => {
      const pins = response.data;
      const domString = `
        <div class="card pin-card" style="width: 18rem;" id ="${pins.id}">
        <img src="${pins.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${pins.pinName}</h5>
        </div>
        </div>
        `;

      utils.printToDom('#pinsOnBoard', domString);
    })
    .catch((err) => console.error('problem with pinsOnBoard', err));
};

export default { buildPinsOnBoard };
