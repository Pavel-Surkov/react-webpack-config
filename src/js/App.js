import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<Header />
				<div>Content</div>
				<Footer />
			</div>
		</Provider>
	);
};

export default App;
