export const ACTIONS = {
    ADD_USER: "ADD_USER",
    ADD_USERS: "ADD_USERS",
    GET_USER_LIST: "GET_USER_LIST"
}

const usersList = [
    { name: "DEMO1", gender: 'male' },
    { name: "DEMO2", gender: 'female'}
]


export const addUser = (user) => {
    return {
        type: ACTIONS.ADD_USER,
        payload: user
    }
}


const addUsers = (users) => {
    return {
        type: ACTIONS.ADD_USERS,
        payload: users
    }
}


export const getUserList = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addUsers(usersList))
        }, 2500);
    }
}