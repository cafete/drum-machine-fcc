import React, { Component } from "react";
import "./App.css";
import Drumpad from "./components/Drumpad";

const data = [
  {
    id: "light sabers",
    letter: "Q",
    src: "http://mattersofgrey.com/audio/starWars-saber-on.mp3"
  },
  {
    id: "bass 1",
    letter: "W",
    src: "https://www.myinstants.com/media/sounds/bass-drum.mp3"
  },
  {
    id: "King",
    letter: "E",
    src:
      "https://vignette.wikia.nocookie.net/ageofempires/images/d/d6/All_hail.ogg/revision/latest?cb=20170605130305"
  },
  {
    id: "R2D2",
    letter: "A",
    src: "http://www.threecaster.com/wavy/artoo6.wav"
  },
  {
    id: "bass 3",
    letter: "S",
    src: "http://billor.chsh.chc.edu.tw/sound/bass4.wav"
  },
  {
    id: "Chewbaca",
    letter: "D",
    src: "http://home.usit.net/~doozie/web3431.wav"
  },
  {
    id: "Wololo",
    letter: "Z",
    src:
      "https://vignette.wikia.nocookie.net/ageofempires/images/a/a1/Wololo.ogg/revision/latest?cb=20170605130607"
  },
  {
    id: "drum hit",
    letter: "X",
    src: "http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3"
  },
  {
    id: "laser",
    letter: "C",
    src: "http://www.dribbleglass.com/Sounds/blaster.wav"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click or Press a Key"
    };
  }

  handleDisplay = display => {
    this.setState({ display });
  };

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
          {data.map(d => (
            <Drumpad
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
