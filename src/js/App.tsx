import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<React.StrictMode>
			<Router>
				<div className="app">
					<Header />
					<div>Content</div>
					<Footer />
				</div>
			</Router>
		</React.StrictMode>
	);
};

export default App;
