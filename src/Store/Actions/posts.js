import axios from 'axios';
import * as actionTypes from './actionTypes';
export const getPostData = () => async dispatch => {
    try {
        dispatch({
           type: actionTypes.FETCH_POST_START
        })
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data);
        dispatch({
            type:actionTypes.FETCH_POST_SUCCESS,
            payload:res.data

        })
    }
    catch(err) {
        dispatch({
         type:actionTypes.FETCH_POST_FAIL,
         error:"no posts yet"
        })

    }
}