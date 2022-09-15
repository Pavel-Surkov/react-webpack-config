import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => (
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

export default App;
