import ACTIONS from './actions';

const initialState = {
    list: []
};

const userReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ACTIONS.ADD_USER:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
    }
    return state;
};

export default userReducer;