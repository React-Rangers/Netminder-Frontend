import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


const client = new ApolloClient({
  cache: new InMemoryCache()
});

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  function renderPage() {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Dashboard") {
      return <Dashboard />;
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





