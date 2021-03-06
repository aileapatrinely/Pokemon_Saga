import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

//components
import Home from '../Views/Home/Home';
import Pokemon from '../Views/Pokemon/Pokemon';
import PokemonList from '../PokemonList/PokemonList';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_POKEMON' });
  }

  render() {
    return (
      <div className="App">
        <img src="images/PokemonLogo.png" alt="Pokemon logo" />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon/:id" component={Pokemon} />
        </Router>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
