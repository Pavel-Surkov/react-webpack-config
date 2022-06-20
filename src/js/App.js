import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddHamster from './components/AddHamster/AddHamster';
import Farm from './components/Farm/Farm';

const App = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<Header />
				<div className="app-wrapper">
					<AddHamster />
					<Farm />
				</div>
				<Footer />
			</div>
		</Provider>
	);
};

export default App;
