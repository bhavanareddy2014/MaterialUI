import * as actionTypes from "../Actions/actionTypes";
const initialstate = {
    albumsData:[],
    loading:false,
    error:null
};
const reducer = (state=initialstate,action) =>{
    switch (action.type) {
        case actionTypes.FETCH_ALBUMS_START:
            return{
                ...state,
                loading:false,
            }
        case actionTypes.FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                albumsData:action.payload,
                loading:true,
            }
        case actionTypes.FETCH_ALBUMS_FAIL:
            return {
                ...state,
                error:action.error
            }
    
        default:
          return state;
    }
}
export default reducer;