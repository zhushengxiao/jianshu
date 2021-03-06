import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../styled'

class Topic extends Component {
	render() {
		const { list } = this.props
		return (
			<TopicWrapper>
				{list.map((item) => (
					<TopicItem key={item.get('id')}>
						<img
							className="topic-pic"
							src={item.get('imgUrl')}
							alt={item.get('id')}
						/>
						{item.get('title')}
					</TopicItem>
				))}
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'topicList']),
})

const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(Topic)
