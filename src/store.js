import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from "./store/user/redux";

const rootRedux = combineReducers({
    User: userReducer
})


// const logger = store => {
//     return next => {
//         return action => {
//             console.log('[Middleware] Dispatching', action);
//             const result = next(action);
//             console.log('[Middleware] updated state', store.getState());
//             return result;
//         }
//     }
// };

const rootStore = createStore(rootRedux, applyMiddleware(thunk))



export default rootStore