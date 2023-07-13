import React, { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import Task from './pages/TaskForm';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const url = process.env.NODE_ENV === 'development' ? '/graphql' : 'https://'
const httpLink = createHttpLink({ uri: url });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

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
    if (currentPage === 'Task') {
      return <Task />
    }
  }
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </ApolloProvider>
  );
};

export default App;
