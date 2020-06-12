import React, { Component, Fragment } from 'react'
import './App.css'
import Header from './common/header/index'
import Footer from './common/footer/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './page/home'
import Detail from './page/detail'
import store from './store'

function App() {
	return (
		<Provider store={store}>
			<Fragment>
				<BrowserRouter>
					<Header></Header>
					<Route path="/" exact component={Home}></Route>
					<Route path="/detail" exact component={Detail}></Route>
					<Footer></Footer>
				</BrowserRouter>
			</Fragment>
		</Provider>
	)
}

export default App
