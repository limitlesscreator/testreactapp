const initState = {
    count: 0,
    users: []
}

export const userReducer = (state = initState, action  ) => {
    switch (action.type){
        case "INC_COUNTER":
            return {...state, count: state.count + 1, }
        case "FETCH_POSTS":
            return {...state, users: action.payload}
        default:
            return state
    }
}