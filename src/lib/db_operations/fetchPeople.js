// Launch with node for adding people

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


async function getPeople(){
    return await new Promise(resolve => {
        db.collection('people')
        .get()
        .then(querySnapshot => {
            console.log('hi')

            const results = querySnapshot.map(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                console.log(doc.data(), 'end of row')
                // results.push(doc.data())
                return doc.data()
            });


            resolve(results)
        }).catch(err => {
            console.log('error happened')
        })
    })

    
}

console.log(getPeople())

/*
const people = (dispatch) => {

    let tmp = db.collection("people")
        .get()
        .then(querySnapshot => {


            const results = querySnapshot.map(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                console.log(doc.data(), 'end of row')
                // results.push(doc.data())
                return doc.data()
            });
            // return querySnapshot.map((elem) => elem)
            dispatch({ type: 'GET_PEOPLE', payload: results })
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        })
        

    // console.log('end of function' + a, tmp)
    
}
// console.log('aaaaaaaaaaaaaaaaaaaaaaaa: '+people().length)

// var votes = [];
// votesRef.on('value', function(snapshot) {
//     snapshot.forEach(function(vote) {
//         votes.push({ ip: vote.key, stars: vote.val() });
//     });
//     alert('There are '+votes.length+' votes');
// })

people()
// a.forEach(function(doc) {
//     console.log(doc.id, " => ", doc.data())
// })
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa: ", results.length)

*/