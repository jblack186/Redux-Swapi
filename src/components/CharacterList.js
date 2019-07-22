import React from "react";

import Character from "./Character";
import { connect } from "react-redux";


const CharacterList = props => {
  console.log(props)
  return (<div>yo</div>
    // <ul>
    //   {props.characters.map(character => {
    //     return <Character key={character.name} character={character} />;
    //   })}
    // </ul>
  );
};

const mapStateToProps = function(state) {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps)(CharacterList);