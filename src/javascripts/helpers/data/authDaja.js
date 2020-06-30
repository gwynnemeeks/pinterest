import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boardList/boardList';

const authDiv = $('#auth');
const boardsDiv = $('#boards');
const logoutButton = $('#navbar-logout-button');
const loginButton = $('#google-auth');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      loginButton.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      boardList.buildBoards();
    } else {
      authDiv.removeClass('hide');
      loginButton.removeClass('hide');
      boardsDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
