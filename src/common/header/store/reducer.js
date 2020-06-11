/* eslint-disable default-case */
/* eslint-disable no-duplicate-case */
import * as actionTypes from './actionTypes'
const defaultState = {
	isFocused: false,
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_FOCUS:
			return {
				...state,
				isFocused: true,
			}
		case actionTypes.SEARCH_BLUR:
			return {
				...state,
				isFocused: false,
			}
	}
	return state
}
