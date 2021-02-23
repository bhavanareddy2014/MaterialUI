import * as actionTypes from "../Actions/actionTypes";
const initialstate = {
    usersData:[],
    loading:false,
    error:null
};
const reducer = (state=initialstate,action) =>{
    switch (action.type) {
        case actionTypes.FETCH_USERS_START:
            return{
                ...state,
                loading:false,
            }
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
               usersData:action.payload,
                loading:true,
            }
        case actionTypes.FETCH_USERS_FAIL:
            return {
                ...state,
                error:action.error
            }
        default:
          return state;
    }
}
export default reducer;