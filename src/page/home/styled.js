import styled from 'styled-components'

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`

export const HomeLeft = styled.div`
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	float: left;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`

export const HomeRight = styled.div`
	width: 280px;
	float: right;
	background: #eee;
`

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 18px;
	line-height: 32px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 10px;

	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
		border-radius: 6px;
	}
`

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: blod;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`

export const RecommendWrapper = styled.div`
	width: 280px;
	margin: 30px 0;
`

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.cover});
	background-size: contain;
`

export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	text-align: center;
	box-sizing: border-box;
`

export const WriterItem = styled.div`
	width: 280px;
	height: 38px;
	margin: 10px auto;
	text-align: center;
	line-height: 38px;
	border-bottom: 1px solid #eee;
	.pic {
		width: 34px;
		height: 34px;
		float: left;
		border-radius: 40%;
		margin-right: 10px;
	}
`

export const WriteInfo = styled.div`
	width: 500px;
	.title {
		font-size: 12px;
		line-height: 12px;
		font-weight: blod;
		text-align: left;
		color: #333;
		margin: 4px auto 2px;
	}
	.desc {
		display: block;
		text-align: left;
		font-size: 8px;
		color: #999;
		margin: 2px auto 0;
	}
`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	margin: 30px 0;
	cursor: pointer;
`

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 50px;
	height: 72px;
	line-height: 50px;
	text-align: center;
	font-size: 14px;
	border: 1px solid #ccc;
	background: url('https://ftp.bmp.ovh/imgs/2020/06/aae9bdad25a2312a.jpg');
	background-size: contain;
	font-size: 12px;
	color: #ec6149;
`
