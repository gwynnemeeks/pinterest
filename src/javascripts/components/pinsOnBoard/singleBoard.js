import boardData from '../../helpers/data/boardData';
import boardPinData from '../../helpers/data/boardPinData';
import utils from '../../helpers/utils';
// import pinData from '../../helpers/data/pinData';

const buildSingleBoard = (e) => {
  const boardId = (e.target.closest('.board-card').id);
  boardData.getPinsByBoardId(boardId)
    .then((response) => {
      const boards = response.data;

      boardPinData.getPinsFromBoardUid(boards.uid)
        .then((res) => console.warn('getpinsbyboard worked!', res))
        .catch((err) => console.error('problem in getpinsbyboard', err));

      const domString = `
        <h2 class="text-center">PinsOnBoards</h2>
        <div class="card board-card" style="width: 18rem;" id ="${boards.id}">
        <h5 class="card-title">${boards.boardName}</h5>
        </div>
      `;

      utils.printToDom('#allPinsOnBoard', domString);
    })
    .catch((err) => console.error('problems with buildSingleBoard', err));
};

export default { buildSingleBoard };
