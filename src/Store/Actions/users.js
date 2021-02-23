import axios from 'axios';
import * as actionTypes from "../Actions/actionTypes";
export const getUserData = () => async dispatch => {
 try{
   dispatch({     
    type:actionTypes.FETCH_USERS_START,
      })
       const res = await axios.get('https://jsonplaceholder.typicode.com/users')
       console.log(res);
       dispatch({
        type:actionTypes.FETCH_USERS_SUCCESS,
        payload:res.data
       })
   
 }
 catch(err){
     dispatch({
         type:actionTypes.FETCH_USERS_FAIL,
         error:"no users yet"
     })

 }
}