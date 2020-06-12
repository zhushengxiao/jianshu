import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
	href: '/',
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`

export const Nav = styled.div`
	width: 90%;
	height: 100%;
	margin-left: 80px;
	min-width: 760px;
	padding-left: 40px;
	box-sizing: border-box;
`

// &.left 如果<NavItem/>组件上有left类名，就向左浮动
export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`

export const SearchWarpper = styled.div`
	position: relative;
	float: left;

	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;

		&.focused {
			background: #777;
			color: #fff;
		}
	}
`

// &::placeholder 表示当前组件下的 placeholder
export const NavSearch = styled.input.attrs({
	placeholder: '搜索',
})`
	height: 38px;
	width: 180px;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	margin-top: 9px;
	padding: 0 30px 0 20px;
	box-sizing: border-box;
	font-size: 14px;
	margin-left: 20px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 260px;
	}
	&.slide-enter {
		transition: all 0.33s ease-out;
	}
	&.slide-enter-active {
		width: 260px;
	}
	&.slide-exit {
		transition: all 0.33s ease-out;
	}
	&.slide-exit-active {
		width: 180px;
	}
`

export const Addition = styled.div`
	position: relative;
	float: right;
	height: 56px;
`

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
	.articlIcon {
		margin-right: 6px;
	}
`

export const SearchInfo = styled.div`
	position: absolute;
	top: 56px;
	left: 0;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
	background: #fff;
`

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	margin-top: 5px;
	.spin {
		display: block;
		float: left;
		font-size: 14px;

		transition: all 0.28s ease-in;
		transform: rotate(0deg);
		transform-origin: center center;
	}
`

export const SearchInfoList = styled.div`
	overflow: hidden;
`

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
	margin-right: 10px;
	margin-bottom: 10px;
`

export const SearchInfoContent = styled.div``

export const SearchInfoFooter = styled.div``
