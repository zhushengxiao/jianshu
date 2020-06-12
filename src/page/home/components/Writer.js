import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem, WriteInfo } from '../styled'

class Writer extends Component {
	render() {
		const { list } = this.props
		return (
			<WriterWrapper>
				{list.map((item) => (
					<WriterItem key={item.get('id')}>
						<img
							className="pic"
							src={item.get('avatar')}
							alt={item.get('id')}
						/>
						<WriteInfo>
							<h3 className="title">{item.get('nickname')}</h3>
							<p className="desc">{item.get('desc')}</p>
						</WriteInfo>
					</WriterItem>
				))}
			</WriterWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'writerList']),
})

export default connect(mapState, null)(Writer)
