import * as firebase from 'firebase';

export const initialize = () =>
  firebase.initializeApp({
    apiKey: 'AIzaSyCqN9mmateRgsn3m5LbZbaAkETaFa4lDKQ',
    authDomain: 'chit-chat-scooby28.firebaseapp.com',
    databaseURL: 'https://chit-chat-scooby28.firebaseio.com',
    projectId: 'chit-chat-scooby28',
    storageBucket: 'chit-chat-scooby28.appspot.com',
    messagingSenderId: '994129309489',
    appId: '1:994129309489:web:c617a053589d7033d70a10',
    measurementId: 'G-GW0QZ7P4JL',
  });

export const setListener = (endpoint, updaterFn) => {
  firebase.database().ref(endpoint).on('value', updaterFn);
  return () => firebase.database().ref(endpoint).off();
};

export const pushData = (endpoint, data) => {
  return firebase.database().ref(endpoint).push(data);
};
