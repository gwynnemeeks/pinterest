import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';

import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authDaja';
import eventListeners from './components/eventListeners/eventListeners';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
  eventListeners.mouseOverBoard();
};

init();
