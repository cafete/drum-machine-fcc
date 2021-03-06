import React, { Component } from "react";

class Drumpad extends Component {
  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  render() {
    return (
      <div className="drum-pad" onClick={this.handleClick} id={this.props.id}>
        <h1>{this.props.letter}</h1>
        <audio
          id={this.props.letter}
          className="clip"
          src={this.props.src}
          ref={ref => (this.audio = ref)}
        />
      </div>
    );
  }
}

export default Drumpad;
