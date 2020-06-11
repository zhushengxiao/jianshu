# Header 组建布局

## 创建 `header/index.js` 写 react-js 代码，在创建 `header/style.js` 放该文件的样式和 html 代码。我们在 styld 里把组件的拆分，好比人的细胞一样，一个头拆分成眼睛、鼻子、嘴巴和耳朵，当然还可以再细化

## 例如：在 `<Nav/>` 组件里，找到小 item 共性，让后拆分成多个`<NavItem/>`小组件

```js
// header/index.js 结构如下：
class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav></Nav>
			</HeaderWrapper>
		)
	}
}
// header/style.js 结构如下：
export const HeaderWrapper = styled.div`
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
	width: 960px;
	height: 100%;
	margin: 0 auto;
	background: green;
`
```

## 在 `style.js` 中，每个组件的样式都是独立的，如果有属性就再补属性即可，这样就是：

    完全遵循组件化思想
