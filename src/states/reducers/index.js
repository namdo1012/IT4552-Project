import { combineReducers } from 'redux';

import userReducer from './user'
import historyReducer from './historyCourse'
import auth from "./auth"

export default combineReducers({
    user : userReducer,
    history : historyReducer,
    auth: auth
})
