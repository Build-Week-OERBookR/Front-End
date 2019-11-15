export const FETCH_USER_ID = 'FETCH_USER_ID';
export const FETCH_BOOK_ID = 'FETCH_BOOK_ID';


export function get_user_Id (id){
    return {
        type: FETCH_USER_ID,
        payload: id
    }
}

export function get_book_id (id){
    return {
        type: FETCH_BOOK_ID,
        payload: id
    }
}