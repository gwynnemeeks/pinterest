import pinComponent from '../pins/pins';
import pinData from '../../helpers/data/pinData';
import singleBoard from '../pinsOnBoard/singleBoard';
// import singleBoard from '../pinsOnBoard/pinsOnBoard';
import utils from '../../helpers/utils';

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = `
        <div class="pins pin-card">
        <h2 class="text-center">My Pins</h2>
        <div class="d-flex flex-wrap">
        `;

      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });

      domString += '</div>';

      utils.printToDom('#pinsOnBoard', domString);

      $('body').on('click', '.board-card', singleBoard.buildSingleBoard);
    })
    .catch((err) => console.error('get pins has failed', err));
};

export default { buildPins };
