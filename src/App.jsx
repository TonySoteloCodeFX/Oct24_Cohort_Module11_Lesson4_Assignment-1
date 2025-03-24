import { Component } from "react";
import CharacterList from "./component/CharacterList";
import CharacterDetails from "./component/CharacterDetails";
import '../src/styles/mainApp.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacter: null,
    };
  }

  handleCharacterSelect = (character) => {
    this.setState({ selectedCharacter: character });
  };

  render() {
    const { selectedCharacter } = this.state;

    return (
      <section className="mainApp" style={{ padding: "20px" }}>
        <div className="logo"></div>
        <CharacterDetails character={selectedCharacter} />
        <CharacterList onCharacterSelect={this.handleCharacterSelect} />
      </section>
    );
  }
}

export default App;