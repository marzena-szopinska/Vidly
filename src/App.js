import React from 'react';
import './App.css';
import Movies from './components/movies';
import NavBar from './components/navBar';


function App() {
  return (
    <main className='container'>
      <br />
      <NavBar />
      <br/>
      <br/>
      <Movies />
    </main>
  );
}

export default App;
