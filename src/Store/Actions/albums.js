import axios from 'axios';
import * as actionTypes from "../Actions/actionTypes";
export const getalbumData =() => async dispatch =>{
    try{
     dispatch({
         type:actionTypes.FETCH_ALBUMS_START
     })
     const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
     console.log(res.data);
     dispatch({
         type:actionTypes.FETCH_ALBUMS_SUCCESS,
         payload:res.data
     })
    }
    catch(err){
        dispatch({
            type:actionTypes.FETCH_ALBUMS_FAIL,
            error:"no albums yet"
        })

    }
} 