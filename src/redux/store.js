import { createStore, combineReducers } from "redux";

function reducer(state = ["Việc làm 1", "Việc làm 2", "Việc làm 3"], action) {
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		case "delete":
			let newArr = [...state];
			const index = newArr.findIndex((e) => action.payload == e);
			newArr.splice(index, 1);
			state = [...newArr];
			return state;
		default:
			return state;
	}
}

function reducer2(state = ["Việc làm 1", "Việc làm 2", "Việc làm 3"], action) {
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		case "delete":
			let newArr = [...state];
			const index = newArr.findIndex((e) => action.payload == e);
			newArr.splice(index, 1);
			state = [...newArr];
			return state;
		default:
			return state;
	}
}
// const rootReducer = combineReducers({ state: reducer });

const store = createStore(reducer);

export default store;
