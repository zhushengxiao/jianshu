import React from 'react'
import './App.css'
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'

function App() {
	return (
		<Provider store={store}>
			<Header />
		</Provider>
	)
}

export default App
