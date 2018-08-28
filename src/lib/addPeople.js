// Launch with node for adding people

const { allthepeople } = require('./People')   //change this with the array of peopla you want to add
const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyBjIQuTfkwSqJE0QXE5VjtmQ-reJ14o37E",
    authDomain: "cast-away-team-d.firebaseapp.com",
    databaseURL: "https://cast-away-team-d.firebaseio.com",
    projectId: "cast-away-team-d",
    storageBucket: "cast-away-team-d.appspot.com",
    messagingSenderId: "960758095750"
};

firebase.initializeApp(config)
const db = firebase.firestore();

const add = () => {
    allthepeople.forEach(element => {
        db.collection('people').add(element)
    });
}
add()