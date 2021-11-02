import React from 'react';
import './App.scss';
import ServiceState from './contexts/serviceState';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

function App() {

  return (
      <ServiceState>
        <SearchBar/>
        <div className="container">
          <Card/>
            <Pagination />
        </div>
      </ServiceState>

  );
}

export default App;
