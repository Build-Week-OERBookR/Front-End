
import {FETCH_BOOK_ID, FETCH_USER_ID} from './../action/loginAction';

const initialState = {
    user_id: '',
    book_id: ''
}
export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_BOOK_ID:
            return{
                ...state,
                book_id: action.payload
            }
        case FETCH_USER_ID:
            return{
                ...state,
                user_id: action.payload
            }
        default:
            return state;
    }
}