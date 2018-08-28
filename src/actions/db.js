
export const FETCH_DB_RESULTS = 'FETCH_DB_RESULTS'
export function pushDbResults(resultsArray) {
  return {
    type: FETCH_DB_RESULTS,
    payload: resultsArray
  }
}

// export const CREATE_ALBUM = 'CREATE_ALBUM'
// export function createAlbum(title) {
//   return (dispatch) => {
//     request
//       .post('https://jsonplaceholder.typicode.com/albums')
//       .send({ title:title })
//       .then(response => dispatch(addAlbum(response.body.id, response.body.title)))
//   }
// }