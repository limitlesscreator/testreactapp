import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import {userReducer} from "./reducer";
import thunk from "redux-thunk";




const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store