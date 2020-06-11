import React from 'react'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWarpper,
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

const Header = (props) => {
	return (
		<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className="left active">首页</NavItem>
				<NavItem className="left">下载App</NavItem>
				<NavItem className="right">登录</NavItem>
				<NavItem className="right">
					<i className="iconfont">&#xe636;</i>``
				</NavItem>
				<SearchWarpper>
					<CSSTransition
						in={props.isFocused}
						timeout={330}
						classNames="slide"
					>
						<NavSearch
							className={props.isFocused ? 'focused' : ''}
							onFocus={props.handleInputFocus}
							onBlur={props.handleInputBlur}
						></NavSearch>
					</CSSTransition>
					<i
						className={
							props.isFocused ? 'iconfont focused' : 'iconfont'
						}
					>
						&#xe62d;
					</i>
				</SearchWarpper>
				<Addition>
					<Button className="writting">
						<i className="iconfont">&#xe96c;</i>写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</Nav>
		</HeaderWrapper>
	)
}

const mapStateToProps = (state) => ({
	isFocused: state.isFocused,
})

const mapDispatchToProps = (dispatch) => ({
	handleInputFocus() {
		const action = { type: 'search_focus' }
		dispatch(action)
	},
	handleInputBlur() {
		const action = { type: 'search_blur' }
		dispatch(action)
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
