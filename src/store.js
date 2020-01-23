import { createStore, combineReducers } from 'redux';

import userReducer from "./store/user/redux";

const rootRedux = combineReducers({
    User: userReducer
})

const rootStore = createStore(rootRedux)

export default rootStore