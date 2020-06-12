import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	writerList: [],
	articlePage: 0,
})

// reducer 导出的必须是一个纯函数：给定一个固定的输入，必须返回一个固定的输出
export default (state = defaultState, action) => {
	// immutable对象的set方法，会结合之前 immutable 对象的值和设置的值
	//   ...返回一个 [全新的对象] !!!
	switch (action.type) {
		case actionTypes.CHANGE_HOME_DATA:
			return state.merge({
				topicList: action.topicList,
				articleList: action.articleList,
				recommendList: action.recommendList,
				writerList: action.writerList,
			})
		case actionTypes.ADD_HOME_DATA:
			return state.merge({
				articleList: state.get('articleList').concat(action.list),
				articlePage: action.nextPage,
			})
		default:
			return state
	}
}
