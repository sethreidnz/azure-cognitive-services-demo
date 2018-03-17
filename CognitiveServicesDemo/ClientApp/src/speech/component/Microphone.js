import React from "react";
import { ReactMic } from "react-mic";
import './Microphone.css';

export class Microphone extends React.Component {
  render() {
    const { onStop, record } = this.props;
    return (
      <div className="microphone">
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          strokeColor="#000000"
          backgroundColor="white"
        />
      </div>
    );
  }
}
