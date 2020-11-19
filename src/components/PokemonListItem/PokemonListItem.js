import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './PokemonListItem.css';

class PokemonListItem extends Component {
  render() {
    return (
      <div className="pokemonListItem">
        There will be Individual pokemon in here.
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PokemonListItem);
