import axiosWithAuth from "./../utils/axiosWithAuth";

export const FETCH_WIShLIST_DATA_START = "FETCH_WIShLIST_DATA_START";
export const FETCH_WIShLIST_DATA_SUCCESS = "FETCH_WIShLIST_DATA_SUCCESS";
export const FETCH_WIShLIST_DATA_ERROR = "FETCH_WIShLIST_DATA_ERROR";

export const FETCH_ALLIDS_DATA_SUCCESS = "FETCH_ALLIDS_DATA_SUCCESS";
export const FETCH_ALLIDS_DATA_ERROR = "FETCH_ALLIDS_DATA_ERROR";
export const FETCH_ALLIDS_DATA_START = "FETCH_ALLIDS_DATA_START";

export const addToWishlist = params => {
  return dispatch => {
    // dispatch({type: FETCH_ALLIDS_DATA_START})
    axiosWithAuth()
      .post(" https://oer-bookr.herokuapp.com/api/wishlist", params)
      .then(res => {
        // dispatch({type:FETCH_ALLIDS_DATA_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log(err);
        // dispatch({type: FETCH_ALLIDS_DATA_ERROR, payload: err.response})
      });
  };
};

export const fetchAllID = () => {
  return dispatch => {
    dispatch({ type: FETCH_ALLIDS_DATA_START });
    axiosWithAuth()
      .get("https://oer-bookr.herokuapp.com/api/wishlist")
      .then(res => {
        const currentUserWIshListID = res.data.filter(wishListId => wishListId.user_id === parseInt(localStorage.getItem("id")))
        dispatch({ type: FETCH_ALLIDS_DATA_SUCCESS, payload: currentUserWIshListID });
      })
      .catch(err => {
        dispatch({ type: FETCH_ALLIDS_DATA_ERROR, payload: err.data });
      });
  };
};

export const fetchWishListData = allId => {
  const currentUserId = localStorage.getItem("id");
  return dispatch => {
    dispatch({ type: FETCH_WIShLIST_DATA_START });
    axiosWithAuth()
      .get(`https://oer-bookr.herokuapp.com/api/users/${currentUserId}`)
      .then(res => {
        dispatch({ type: FETCH_WIShLIST_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_WIShLIST_DATA_ERROR, payload: err.data });
      });
  };
};


export const deleteSavedBook =  bookId => {
    return dispatch => {
        axiosWithAuth()
        .get("https://oer-bookr.herokuapp.com/api/wishlist")
        .then(res => {
          // filter the response and  filter the wishlist data with the same id as the current user
          const currentUserWIshListID = res.data.filter(wishListId => wishListId.user_id === parseInt(localStorage.getItem("id")));
          // Return the first element with the same id as the bookid from the wishlist card
          const wishListIdToDelete = currentUserWIshListID.find((current => current.book_id === bookId))
          //make a  delete call to delete the item that was return from the wishListIdToDelete

          axiosWithAuth().delete(`https://oer-bookr.herokuapp.com/api/wishlist/${wishListIdToDelete.id}`)
            .then(res=> {
            })
            .catch(err => {
            })
        })
        .catch(err => {
        });
        
    }
}
