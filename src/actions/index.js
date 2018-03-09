export const ADD_NUMBER = "add_number";
export const SUBTRACT_NUMBER = "subtract_number";

export function addNumber(number) {
	number = number + 1;
	return {
		type: ADD_NUMBER,
		number
	};
}

export function subtractNumber(number) {
	number = number - 1;
	return {
		type: SUBTRACT_NUMBER,
		number
	};
}
