import boardData from '../../helpers/data/boardData';
import boardComponent from '../boards/boards';
import utils from '../../helpers/utils';

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      console.warn('Got the boards', boards);
      let domString = `
      <h2 class="text-center">Boards</h2>
      <div class="d-flex flex-wrap">
      `;

      boards.forEach((board) => {
        domString += boardComponent.boardMaker(board);
      });

      domString += '</div>';

      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('get boards broke', err));
};

export default { buildBoards };
