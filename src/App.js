import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import './styles/App.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/properties" element={<PropertyPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;