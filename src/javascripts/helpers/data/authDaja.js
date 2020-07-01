import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boardList/boardList';
// import pinList from '../../components/pinsList/pinsList';

const authDiv = $('#auth');
const boardsDiv = $('#boards');
const logoutButton = $('#navbar-logout-button');
const loginButton = $('#google-auth');
const pinsDiv = $('#pins');
// const allPinsOnBoardDiv = $('#allPinsOnBoard);

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      loginButton.addClass('hide');
      boardsDiv.removeClass('hide');
      pinsDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      boardList.buildBoards();
      // pinList.buildPins(); // may move to click event js
    } else {
      authDiv.removeClass('hide');
      loginButton.removeClass('hide');
      boardsDiv.addClass('hide');
      pinsDiv.addClass('hide'); // my move to click event js
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
