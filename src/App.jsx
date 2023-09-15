import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Routes } from './Component/config';

function App() {
	return (
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	);
}
export default App;
