import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  function renderPage() {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Placeholder') {
      return <Placeholder />;
    }
  }
  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App
