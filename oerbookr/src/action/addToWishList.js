export const FETCH_WIShLIST_DATA_START = 'FETCH_WIShLIST_DATA_START'
export const FETCH_WIShLIST_DATA_SUCCESS = 'FETCH_WIShLIST_DATA_SUCCESS'
export const FETCH_WIShLIST_DATA_ERROR = 'FETCH_WIShLIST_DATA_ERROR';

import axiosWithAuth from './../utils/axiosWithAuth'

export const addToWishlist = params => {
    return dispatch => {
        dispatch({type: FETCH_WIShLIST_DATA_START});
        axiosWithAuth().post(' https://oer-bookr.herokuapp.com/api/wishlist', params)
        .then(res=> { 
            dispatch({type: FETCH_WIShLIST_DATA_SUCCESS});
            console.log(res)
        })
        .catch(err => {
            dispatch({type: FETCH_WIShLIST_DATA_ERROR});
                console.lof(err)
            })
    }   
} 
