import { combineReducers } from "redux";
import {reducer as FormReducer} from "redux-form";
import eventReducer from "../../features/Event/eventReducer";
import modalReducer from "../../features/Modals/modalReducer";
import authReducer from "../../features/auth/authReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer
})

export default rootReducer;