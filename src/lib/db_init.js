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
export default firebase.firestore()