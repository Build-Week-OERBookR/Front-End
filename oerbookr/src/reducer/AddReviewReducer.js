// import {ADD_REVIEW_START,
//     ADD_REVIEW_SUCCESSFUL,
//     ADD_REVIEW_FAILED} from '../action/AddReviewAction'

// const initialState = {
//     review: "",
//     stars: 0,
//     reviewer_id: parseInt(localStorage.getItem('id')),
//     isFetching: false
// }

// export function reviewReducer (state = initialState, action) {
//     switch(action.type){
//         case ADD_REVIEW_START :
//             return{
//                 ...state,
//                 isFetching : true
//             }
//         case ADD_REVIEW_SUCCESSFUL :
//             return{
//                 ...state,
//                 isFetching : false,
//                 review: action.payload
//             }
//         default: 
//         return state
//     }
// }