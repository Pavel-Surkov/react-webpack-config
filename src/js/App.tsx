import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App: React.FC = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<Router>
					<div className="app">
						<Header />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<div>About Content</div>} />
						</Routes>
						<Footer />
					</div>
				</Router>
			</Provider>
		</React.StrictMode>
	);
};

export default App;
