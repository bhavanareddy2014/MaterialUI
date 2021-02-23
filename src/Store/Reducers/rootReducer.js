import {combineReducers} from 'redux';
import postsReducer from '../Reducers/posts';
import albumsReducer from '../Reducers/albums';
import usersReducer from '../Reducers/users';
const rootReducer = combineReducers({
    posts:postsReducer,
    albums:albumsReducer,
    users:usersReducer
})
export default rootReducer;