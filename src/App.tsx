import React from 'react';
import './App.css';
import HiveGrid from './components/hive/HiveGrid';
import Navbar from './components/navbar/Navbar';
import Intro from './sections/Intro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <HiveGrid />
    </div>
  );
}

export default App;
