import axios from 'axios'

const initialFetchUsersState = {
    usersData: [],
    data: [],
    status: 'idle',
    error: null
}


const fetchUsersData = (url) => {
    return async (dispatch) => {
        const response = await axios.get(url)
        dispatch({
            type: "FETCH_USERS_DATA",
            payload: response.data
        })
    }
}

const fetchUsersReducer = (state = initialFetchUsersState, action) => {
    switch(action.type) {
        case "FETCH_USERS_DATA":
            return {
                ...state,
                usersData: action.payload,
                status: 'succeded'
            }
        default:
            return state;
    }   
}

export {fetchUsersData, fetchUsersReducer}