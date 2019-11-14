import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./UsersReducer";

import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import homeReducer from "./homeReducer";


let redusers = combineReducers({

    messagesPage: dialogsReducer,
    homePage: homeReducer,
    usersPage: usersReducer,
    form: formReducer
});
let store = createStore (redusers);

window.store=store;
export default store;

