import React from 'react';
import './App.css';
import HiveGrid from './components/hive/HiveGrid';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HiveGrid />
    </div>
  );
}

export default App;
