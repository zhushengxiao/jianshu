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
} from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFocused: false,
		}
		this.handleInputFocus = this.handleInputFocus.bind(this)
		this.handleInputBlur = this.handleInputBlur.bind(this)
	}

	handleInputFocus() {
		console.log('focus')
		this.setState({
			isFocused: true,
		})
	}

	handleInputBlur() {
		this.setState({
			isFocused: false,
		})
	}

	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWarpper>
						<CSSTransition
							in={this.state.isFocused}
							timeout={330}
							classNames="slide"
						>
							<NavSearch
								className={
									this.state.isFocused ? 'focused' : ''
								}
								onFocus={this.handleInputFocus}
								onBlur={this.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i
							className={
								this.state.isFocused
									? 'iconfont focused'
									: 'iconfont'
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
}

export default Header
