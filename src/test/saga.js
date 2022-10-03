import { all, fork, takeEvery, put } from "redux-saga/effects";
import { GET_USER } from "../redux/constants";
import { getUserSuccess, getUserError } from "./action";
import UserService from "./service";

export function* watchGetUser() {
    yield takeEvery(GET_USER, getUsers);
}

function* getUsers() {
    try {
        const response = yield UserService.getUserService();

        if (response.status === 200) {
            yield put(getUserSuccess(response?.data));
        } else {
            yield put(getUserError(response?.data || response?.detail));
        }
    } catch (error) {
        yield put(getUserError(error));
    }
}

export default function* rootSaga() {
    yield all([fork(watchGetUser)]);
}
