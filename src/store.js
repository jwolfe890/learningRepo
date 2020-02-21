import { createStore, combineReducers } from "redux";
import addPersonReducer from "./reducers/addPersonReducer";

const reducers = combineReducers({
    addPersonReducer
});

export default createStore(reducers);