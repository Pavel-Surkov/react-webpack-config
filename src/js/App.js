import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';

const Content = () => <div>Content</div>;

const App = () => {
	const path = useParams().id;
	console.log(path);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="app">
					<Header />
					<Link to="/content/doggos">ToContent</Link>
					<Routes>
						<Route path="/content/:id" element={<Content />} exact />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
