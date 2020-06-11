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
		if (this.props.isFocused) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{this.props.list.map((item) => {
							return (
								<SearchInfoItem key={item}>
									{item}
								</SearchInfoItem>
							)
						})}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null
		}
	}

	render() {
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
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i
							className={
								this.props.isFocused
									? 'iconfont focused'
									: 'iconfont'
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
	isFocused: state.getIn(['header', 'isFocused']),
	list: state.getIn(['header', 'list']),
})

const mapDispatchToProps = (dispatch) => ({
	handleInputFocus() {
		dispatch(actionCreators.getList())
		dispatch(actionCreators.searchFoucs())
	},
	handleInputBlur() {
		dispatch(actionCreators.searchBlur())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
