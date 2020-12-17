import { combineReducers } from 'redux';

import userReducer from './user'
import historyReducer from './historyCourse'

export default combineReducers({
    user : userReducer,
    history : historyReducer
})
