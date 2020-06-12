import styled from 'styled-components'

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
`

export const LoginBox = styled.div`
	width: 400px;
	height: 200px;
	margin: 100px auto;
	padding-top: 20px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
`

export const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	margin: 10px auto;
	padding: 0 10px;
	color: #777;
`

export const Botton = styled.button.attrs({
	type: 'button',
})`
	display: block;
	width: 220px;
	height: 43px;
	line-height: 30px;
	background: #3194d0;
	border-radius: 25px;
	margin: 30px auto;
	text-align: center;
	color: #fff;
	font-size: 18px;
	border: none;
	outline: none;
`
