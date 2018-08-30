
export const FETCH_ALL_DB = 'FETCH_ALL_DB'
export function pushDbResults(resultsArray) {
  return {
    type: FETCH_ALL_DB,
    payload: resultsArray
  }
}


export const FETCH_MATCHED = 'FETCH_MATCHED'
export function pushDbMatched(resultsArray) {
  return {
    type: FETCH_MATCHED,
    payload: resultsArray
  }
}

export const CLEAR_MATCHED = 'CLEAR_MATCHED'
export function clearMatched(resultsArray) {
  return {
    type: CLEAR_MATCHED,
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