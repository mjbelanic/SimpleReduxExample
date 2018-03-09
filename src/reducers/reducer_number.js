import { SUBTRACT_NUMBER, ADD_NUMBER } from "../actions/index";

export default function(state = 0, action) {
	console.log(action.number);
	switch (action.type) {
		case SUBTRACT_NUMBER:
			return action.number;
		case ADD_NUMBER:
			return action.number;
	}
	return state;
}
