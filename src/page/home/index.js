import React, { Component } from 'react'
import Tpoic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './styled'

class Home extends Component {
	componentDidMount() {
		this.props.fetchHomeData()
		this.bindEvents()
	}
	handleScrollTop() {
		window.scrollTo(0, 0)
	}

	componentWillUnmount() {
		this.unbindEvents()
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow)
	}

	unbindEvents() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
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
				{this.props.showScroll ? (
					<BackTop onClick={this.handleScrollTop}>
						{'返回顶部'}
					</BackTop>
				) : null}
			</HomeWrapper>
		)
	}
}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll']),
})

const mapDispatch = (dispatch) => ({
	fetchHomeData() {
		dispatch(actionCreators.fetchHomeData())
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 200) {
			dispatch(actionCreators.toggleTopShow(true))
		} else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	},
})

export default connect(mapState, mapDispatch)(Home)
