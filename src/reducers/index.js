import { combineReducers } from "redux";
import NumberReducer from "./reducer_number";

const rootReducer = combineReducers({
	number: NumberReducer
});

export default rootReducer;
