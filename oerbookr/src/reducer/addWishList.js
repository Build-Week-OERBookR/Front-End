
import { 
        FETCH_WIShLIST_DATA_SUCCESS,
        FETCH_WIShLIST_DATA_ERROR, 
        FETCH_WIShLIST_DATA_START,
        FETCH_ALLIDS_DATA_SUCCESS,
        FETCH_ALLIDS_DATA_ERROR,
        FETCH_ALLIDS_DATA_START,
    } from './../action/addToWishList';

const initialState = {
    isFetching: false,
    data: [],
    error: '',
    allId: {
        error: '',
        data: [],
        isFetching: false
    }
}
export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_WIShLIST_DATA_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_WIShLIST_DATA_SUCCESS:
            return{
                ...state,
                isFetching: false,
                data: action.payload
            }
        case FETCH_WIShLIST_DATA_ERROR:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_ALLIDS_DATA_START:
            return{
                ...state,
                allId: {
                    ...state.allId,
                    isFetching: true
                }
            }
        case FETCH_ALLIDS_DATA_SUCCESS:
            return{
                ...state,
                allId: {
                    ...state.allId,
                    isFetching: false,
                    data: action.payload
                }
            }
        case FETCH_ALLIDS_DATA_ERROR:
            return{
                ...state,
                allId: {
                    ...state.allId,
                    isFetching: false,
                    data: action.payload
                }
            }
        default:
            return state;
    }
}