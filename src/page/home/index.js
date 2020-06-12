import React, { Component } from 'react'
import Tpoic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight } from './styled'

class Home extends Component {
	componentDidMount() {
		this.props.fetchHomeData()
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img
						className="banner-img"
						src="https://upload.jianshu.io/admin_banners/web_images/4976/a0012dd0250a3003bca3731ffa6098e82201d024.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
						alt="cover1"
					/>
					<Tpoic></Tpoic>
					<List></List>
				</HomeLeft>
				<HomeRight>
					<Recommend></Recommend>
					<Writer></Writer>
				</HomeRight>
			</HomeWrapper>
		)
	}
}

const mapDispatch = (dispatch) => ({
	fetchHomeData() {
		dispatch(actionCreators.fetchHomeData())
	},
})

export default connect(null, mapDispatch)(Home)
