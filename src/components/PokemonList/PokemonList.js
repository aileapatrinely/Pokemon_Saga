import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonListItem from '../PokemonListItem/PokemonListItem';

class PokemonList extends Component {
  render() {
    //   console.log(this.props.store);
    //   const pokemonListHtmlArray = this.props.store.pokemonReducer.map(
    //     (item, index) => {
    //       return <PokemonListItem pokemon={item} />;
    //     }
    //   );

    return (
      <div>
        <PokemonListItem />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PokemonList);
