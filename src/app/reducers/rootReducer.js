import { combineReducers } from "redux";
import {reducer as FormReducer} from "redux-form";
import eventReducer from "../../features/Event/eventReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    events: eventReducer
})

export default rootReducer;