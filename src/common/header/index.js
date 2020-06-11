import React, { Component } from 'react'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWarpper,
	SearchInfoTitle,
	SearchInfo,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component {
	getListArea = () => {
		const {
			isFocused,
			isMouseIn,
			list,
			page,
			totalPage,
			handleChangePage,
			handleMouseEnter,
			handleMouseLeave,
		} = this.props

		let jsList = list.toJS() || []
		let pageList = []

		if (jsList.length) {
			for (let i = page * 10; i < (page + 1) * 10; i++) {
				if (jsList[i]) {
					pageList.push(
						<SearchInfoItem key={jsList[i]}>
							{jsList[i]}
						</SearchInfoItem>
					)
				}
			}
		}
		if (isFocused || isMouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={() =>
								handleChangePage(page, totalPage, this.spinIcon)
							}
						>
							<i
								ref={(icon) => {
									this.spinIcon = icon
								}}
								className="iconfont spin"
							>
								&#xe851;
							</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>{pageList}</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null
		}
	}

	render() {
		const {
			isFocused,
			handleInputFocus,
			handleInputBlur,
			list,
		} = this.props
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>

					<SearchWarpper>
						<CSSTransition
							in={this.props.isFocused}
							timeout={330}
							classNames="slide"
						>
							<NavSearch
								className={
									this.props.isFocused ? 'focused' : ''
								}
								onFocus={() =>
									this.props.handleInputFocus(list)
								}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i
							className={
								this.props.isFocused
									? 'iconfont focused zoom'
									: 'iconfont zoom'
							}
						>
							&#xe62d;
						</i>
						{this.getListArea()}
					</SearchWarpper>
					<Addition>
						<Button className="writting">
							<i className="iconfont">&#xe96c;</i>写文章
						</Button>
						<Button className="reg">注册</Button>
					</Addition>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>``
					</NavItem>
				</Nav>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	isMouseIn: state.getIn(['header', 'isMouseIn']),
	isFocused: state.getIn(['header', 'isFocused']),
	list: state.getIn(['header', 'list']),
	page: state.getIn(['header', 'page']),
	totalPage: state.getIn(['header', 'totalPage']),
})

const mapDispatchToProps = (dispatch) => ({
	handleInputFocus(list) {
		list.size === 0 && dispatch(actionCreators.getList())
		dispatch(actionCreators.searchFoucs())
	},
	handleInputBlur() {
		dispatch(actionCreators.searchBlur())
	},
	handleMouseEnter() {
		dispatch(actionCreators.mouseEnter())
	},
	handleMouseLeave() {
		dispatch(actionCreators.mouseLeave())
	},
	handleChangePage(page, totalPage, spin) {
		console.log('spin.style.transform-->', spin.style.transform)
		let originAngle = spin.style.transform.replace(/[^0-9]/gi, '')
		console.log('originAngle-->', originAngle)
		if (originAngle) {
			originAngle = parseInt(originAngle, 10)
		} else {
			originAngle = 0
		}
		spin.style.transform = `rotate(${originAngle + 360}deg)`
		if (page < totalPage - 1) {
			dispatch(actionCreators.changePage(page + 1))
		} else {
			dispatch(actionCreators.changePage(0))
		}
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
