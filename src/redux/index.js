import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import {fetchUsersReducer} from './fetchUsersReducer.jsx'

const rootReducer = combineReducers({
    fetchUsersData: fetchUsersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;

