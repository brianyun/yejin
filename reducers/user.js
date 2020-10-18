export const initialState = {
	name: "",
};

export const ADD_NAME = "ADD_NAME";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NAME: {
			return {
				...state,
				name: action.data,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default reducer;
