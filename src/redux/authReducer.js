/*
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false

};


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }

        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
/!*export const getAuthUserData = () => (dispatch)=>{


    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login}= response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}*!/
/!*export const login = (email, password, rememberMe) => (dispatch)=>{


    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                dispatch(stopSubmit("login", {_error: "Имя пользователя или пароль введены не верно"}))
            }
        })
}
export const logout = () => (dispatch)=>{


    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}*!/


export default authReducer;*/
