import React, { Component } from 'react'
import { FooterWrapper } from './styled'

class Footer extends Component {
	render() {
		return (
			<FooterWrapper>
				<a target="_blank" href="http://www.jianshu.com/c/jppzD2">
					关于简书
				</a>
				<em> · </em>
				<a target="_blank" href="http://www.jianshu.com/contact">
					联系我们
				</a>
				<em> · </em>
				<a target="_blank" href="http://www.jianshu.com/c/bfeec2e13990">
					加入我们
				</a>
				<em> · </em>
				<a target="_blank" href="http://www.jianshu.com/p/fc1c113e5b6b">
					简书出版
				</a>
				<em> · </em>
				<a target="_blank" href="http://www.jianshu.com/press">
					品牌与徽标
				</a>
				<em> · </em>
				<a target="_blank" href="http://www.jianshu.com/faqs">
					帮助中心
				</a>
				<em> · </em>
				<a target="_blank" href="http://www.jianshu.com/p/cabc8fa39830">
					合作伙伴
				</a>
			</FooterWrapper>
		)
	}
}

export default Footer
