import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import pinData from '../../helpers/data/pinData';
import pinMaker from '../pins/pins';

const buildSingleBoard = (e) => {
  const boardId = (e.target.closest('.board-card').id);
  boardData.getPinsByBoardId(boardId)
    .then((response) => {
      const pins = response.data;
      pinData.getPinsFromBoardUid(boardId)
        .then((boardPins) => (boardPins))
        .catch((err) => console.error('problem in getpinsbyboard', err));

      const domString = pinMaker.pinMaker(pins);

      utils.printToDom('#allPinsOnBoard', domString);
    })
    .catch((err) => console.error('problems with buildSingleBoard', err));
};

export default { buildSingleBoard };
