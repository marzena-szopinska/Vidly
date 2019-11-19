import React from 'react';
import './App.css';
import Movies from './components/movies';
import Movie from './components/movie';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <main className='container'>
      <br />
      <NavBar />
      <br />
      <br />
      <Switch>
        <Route path='/movies/:id' component={Movie} />
        <Route path='/movies' component={Movies} />
        <Route path='/customers' component={Customers} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/not-found' compoment={NotFound} />
        <Redirect from='/' to='/movies' />
        <Redirect to='/not-found' />
      </Switch>
    </main>
  );
}

export default App;
