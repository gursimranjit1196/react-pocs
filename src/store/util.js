export const setStateData = (initialState, newObj) => {
    return {
        ...initialState,
        ...newObj
    }
}