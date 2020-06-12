import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './styled'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component {
	componentDidMount() {
		console.log('this.props.match.params.id', this.props.match.params.id)
		this.props.getDetail(this.props.match.params.id)
	}

	render() {
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content
					dangerouslySetInnerHTML={{ __html: this.props.content }}
				></Content>
			</DetailWrapper>
		)
	}
}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id))
	},
})

export default connect(mapState, mapDispatch)(Detail)
