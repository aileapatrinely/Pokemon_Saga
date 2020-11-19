import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonListItem from '../PokemonListItem/PokemonListItem';

class PokemonList extends Component {
  render() {
    console.log(this.props.store);
    const pokemonListArray = this.props.store.pokemonReducer.map(
      (item, index) => {
        return (
          <div>
            <img src={item.images} alt="Pokemon" />
            <h4>{item.name}</h4>
          </div>
        );
      }
    );

    return <div>{pokemonListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PokemonList);
