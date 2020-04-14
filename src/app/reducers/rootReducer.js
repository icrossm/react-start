import { combineReducers } from "redux";
import eventReducer from "../../features/Event/eventReducer";

const rootReducer = combineReducers({
    events: eventReducer
})

export default rootReducer;