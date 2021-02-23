import {applyMiddleware,compose, createStore} from 'redux'
import rootReducer from '../Store/Reducers/rootReducer';
import thunk from "redux-thunk";
const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
  compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
export default store;