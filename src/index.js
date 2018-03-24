import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAGxSQx9paJQG3Er6LJ1seBeiI-ayew_08",
    authDomain: "notice-44f3c.firebaseapp.com",
    databaseURL: "https://notice-44f3c.firebaseio.com",
    projectId: "notice-44f3c",
    storageBucket: "",
    messagingSenderId: "205220005644"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
