import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBjIQuTfkwSqJE0QXE5VjtmQ-reJ14o37E",
    authDomain: "cast-away-team-d.firebaseapp.com",
    databaseURL: "https://cast-away-team-d.firebaseio.com",
    projectId: "cast-away-team-d",
    storageBucket: "cast-away-team-d.appspot.com",
    messagingSenderId: "960758095750"
}

firebase.initializeApp(config)

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

const db = firebase.firestore()
const storage = firebase.storage()

export {db, storage, firebase}
