import React from 'react';
import './App.css';
import Movies from './components/movies';
import Movie from './components/movie';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import Login from './components/login';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <br />
        <Switch>
          <Route path='/movies/:id' component={Movie} />
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/login' component={Login} />
          <Route path='/not-found' component={NotFound} />
          <Route path='/' component={Movies} exact />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
