import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const changeDetail = ({ title, content }) => ({
	type: actionTypes.CHANGE_DETAIL_DATA,
	title,
	content,
})

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get(`/api/detail.json?id=${id}`).then((res) => {
			const data = res.data.data
			dispatch(changeDetail(data))
		})
	}
}
