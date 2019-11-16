import axiosWithAuth from './../utils/axiosWithAuth'



export const FETCH_WIShLIST_DATA_START = 'FETCH_WIShLIST_DATA_START';
export const FETCH_WIShLIST_DATA_SUCCESS = 'FETCH_WIShLIST_DATA_SUCCESS';
export const FETCH_WIShLIST_DATA_ERROR = 'FETCH_WIShLIST_DATA_ERROR';   

export const FETCH_ALLIDS_DATA_SUCCESS = 'FETCH_ALLIDS_DATA_SUCCESS';
export const FETCH_ALLIDS_DATA_ERROR = 'FETCH_ALLIDS_DATA_ERROR';   
export const FETCH_ALLIDS_DATA_START = 'FETCH_ALLIDS_DATA_START';   


export const addToWishlist = params => {
    
    return dispatch => {
        // dispatch({type: FETCH_ALLIDS_DATA_START})
        axiosWithAuth().post(' https://oer-bookr.herokuapp.com/api/wishlist', params)
        .then(res=> { 
            // dispatch({type:FETCH_ALLIDS_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            // dispatch({type: FETCH_ALLIDS_DATA_ERROR, payload: err.response})
            })
        }   
} 

export const fetchAllID = () => {
    return dispatch => {
        dispatch({type: FETCH_ALLIDS_DATA_START});
        axiosWithAuth().get(' https://oer-bookr.herokuapp.com/api/wishlist')
            .then(res=> { 
                
                dispatch({type: FETCH_ALLIDS_DATA_SUCCESS, payload: res.data});
            })
            .catch(err => {
                dispatch({type: FETCH_ALLIDS_DATA_ERROR, payload: err.data});
            });
    }
}

export const fetchWishListData = (allId) => {

    return dispatch => {
        dispatch({type: FETCH_WIShLIST_DATA_START});
        allId.forEach(element => {
            axiosWithAuth().get(`https://oer-bookr.herokuapp.com/api/users/${element.user_id}`)
                .then(res=> { 
                    dispatch({type: FETCH_WIShLIST_DATA_SUCCESS, payload: res.data});
                })
                .catch(err => {
                    dispatch({type: FETCH_WIShLIST_DATA_ERROR, payload: err.data});
                });
        });
    }
}