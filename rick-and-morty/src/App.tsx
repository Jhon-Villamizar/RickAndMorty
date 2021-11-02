import React from 'react';
import './App.scss';
import ServiceState from './contexts/serviceState';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {

  return (
      <ServiceState>
        <SearchBar/>
        <div className="container">
          <Card/>
        </div>
      </ServiceState>

  );
}

export default App;
