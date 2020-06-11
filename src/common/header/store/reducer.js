/* eslint-disable default-case */
/* eslint-disable no-duplicate-case */
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
	isFocused: false,
	list: [],
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_FOCUS:
			return state.set('isFocused', true)
		case actionTypes.SEARCH_BLUR:
			return state.set('isFocused', false)
		case actionTypes.CHANGE_LIST:
			return state.set('list', action.data)
	}
	return state
}
