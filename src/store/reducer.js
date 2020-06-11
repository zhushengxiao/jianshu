/* eslint-disable default-case */
/* eslint-disable no-duplicate-case */
const defaultState = {
	isFocused: false,
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'search_focus':
			return {
				...state,
				isFocused: true,
			}
		case 'search_blur':
			return {
				...state,
				isFocused: false,
			}
	}
	return state
}
