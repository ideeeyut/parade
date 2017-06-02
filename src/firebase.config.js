import * as firebase from 'firebase';

export const firebaseConn = firebase.initializeApp({
    apiKey: 'AIzaSyAxVfoAzfvSXqNb4IYvVHdRBA1v2HmiJZI',
    authDomain: 'firestarter-c211c.firebaseapp.com',
    databaseURL: 'https://firestarter-c211c.firebaseio.com',
    storageBucket: 'firestarter-c211c.appspot.com',
    messagingSenderId: '37797816176',
});

export const fbDb = firebaseConn.database();
export const fbAuth = firebase.auth();
export const fbAuthProvider = new firebase.auth.GoogleAuthProvider();
