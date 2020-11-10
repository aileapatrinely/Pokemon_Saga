import React, { Component } from 'react';
import PokemonList from '../../PokemonList/PokemonList';

class Home extends Component {
  componentDidMount() {
    document.title = 'Pokemon Home';
  }

  render() {
    return (
      <div>
        <PokemonList clickPokemon={this.clickPokemon} />
      </div>
    );
  }
}

export default Home;
