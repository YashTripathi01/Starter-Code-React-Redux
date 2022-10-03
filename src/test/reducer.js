import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from "../redux/constants";

const INIT_STATE = {
    userList: [],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state };
        case GET_USER_SUCCESS:
            return {
                ...state,
                userList: action.payload,
            };
        case GET_USER_ERROR:
            return {
                ...state,
                userList: action.payload,
            };
        default:
            return { ...state };
    }
};
