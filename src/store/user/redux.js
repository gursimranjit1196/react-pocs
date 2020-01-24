import { ACTIONS } from './actions';
import { setStateData } from "../util";


const initialState = {
    list: []
};


const userReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ACTIONS.ADD_USER:
            return setStateData(state, { list: [...state.list, action.payload] })
        case ACTIONS.ADD_USERS:
            return setStateData(state, { list: [...action.payload] })
    }
    return state;
};


export default userReducer;