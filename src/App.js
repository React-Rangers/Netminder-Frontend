import React, { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import Team from './pages/Team';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  function renderPage() {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Dashboard') {
      return <Dashboard />;
    }
    if (currentPage === 'LoginForm') {
      return <LoginForm />
    }
    if (currentPage === 'SignUpForm') {
      return <SignUpForm />
    }
    if (currentPage === 'Team') {
      return <Team />
    }
  }
  return (
    <>
      <div>
        <Navbar setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
      <Footer />
    </>
  );
};

export default App;
