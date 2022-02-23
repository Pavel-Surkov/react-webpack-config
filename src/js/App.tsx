import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC<string> = ({ text }) => {
  return (
    <React.StrictMode>
      <div className="app">
        <Header />
        <div>{text}</div>
        <Footer />
      </div>
    </React.StrictMode>
  );
};

export default App;
