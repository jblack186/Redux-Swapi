import React from "react";
import { connect } from "react-redux";

import { fetchSwapi,  } from '../actions';
// import actions

class CharacterListView extends React.Component {
  
  componentDidMount() {
    this.props.fetchSwapi();
  }

  render() {
   
    console.log(this.props.characters)
    console.log(this.props)
 
      // return something here to indicate that you are fetching data
    
      return (
        <div className="App">
        
       {this.props.fetching ? (
              <p>Loading</p>
            ) : (
              <ul>
              {this.props.characters.map(char => {
                return <li key={char.name}>{char.name}</li>;
              })}
            </ul>
            )}
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    
      characters: state.characters,
      fetching: state.fetching
    });
  
  export default connect(mapStateToProps, { fetchSwapi })(CharacterListView);
