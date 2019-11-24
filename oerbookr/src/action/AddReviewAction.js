// import axiosWithAuth from "./../utils/axiosWithAuth";

// export const ADD_REVIEW_START = 'ADD_REVIEW_START';
// export const ADD_REVIEW_SUCCESSFUL = 'ADD_REVIEW_SUCCESSFUL';
// export const ADD_REVIEW_FAILED = 'ADD_REVIEW_FAILED';

// export const addReview = params => {
//     return dispatch => {
//         dispatch({type : ADD_REVIEW_START})
//         axiosWithAuth().post(`https://oer-bookr.herokuapp.com/api/reviews/`, reviews)
//         .then(res => {
//             dispatch({type:ADD_REVIEW_SUCCESSFUL, payload: window.location.reload()})
//         })
//         .catch(err => {
//             console.log(err)
//             dispatch({type:ADD_REVIEW_SUCCESSFUL, payload: err.response})
//         })
//     }
// }