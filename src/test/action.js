import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from "../redux/constants";

export const getUser = () => ({
    type: GET_USER,
});
export const getUserSuccess = (data) => ({
    type: GET_USER_SUCCESS,
    payload: data,
});
export const getUserError = () => ({
    type: GET_USER_ERROR,
});
