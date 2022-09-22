import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
	return (
		<React.StrictMode>
			<Router>
				<div className="app">
					<Header />
					<Routes>
						<Route path="/" element={<div>Home Content</div>} />
						<Route path="/about" element={<div>About Content</div>} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</React.StrictMode>
	);
};

export default App;
