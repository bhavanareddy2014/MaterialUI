import *  as actionTypes from "../Actions/actionTypes";
const initialstate = {
    postData:[],
    loading:false,
    error:null

};
const reducer = (state = initialstate, action) =>{
    
    switch (action.type) {
        case actionTypes.FETCH_POST_START:
         return {
             ...state,
             loading:false
         }
          case actionTypes.FETCH_POST_SUCCESS:
              return {
                  ...state,
                  postData:action.payload,
                  loading:true,
              }  
           case actionTypes.FETCH_POST_FAIL:
               return {
                   ...state,
                   error:action.error

               }   
            
    
        default:
            return state;
    }

}
export default reducer;