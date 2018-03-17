import React, { Component } from "react";
import './Speech.css';

import { Notification } from "../components/Notification";
import { Microphone } from "./component/Microphone";

export class Speech extends Component {
  state = {
    record: false
  };
  configIsValid = () => {
    const { config: { bingSpeech } } = this.props;
    return bingSpeech.key;
  };
  startRecording = () => {
    this.setState({
      record: true
    });
  };
  stopRecording = () => {
    this.setState({
      record: false
    });
  };
  render() {
    if (!this.configIsValid()) {
      return (
        <Notification
          type="danger"
          text="Please go to the readme and configure the your user secrets for Bing Speech API"
        />
      );
    }
    const { record } = this.state;
    return (
      <div className="container speech">
        <div className="microphone-wrapper">
          <Microphone
            record={record}
            startRecording={this.startRecording}
            stopRecording={this.stopRecording}
          />
          <div className="controls">
            <a className="button" onClick={this.startRecording}>
              Start
            </a>
            <a className="button" onClick={this.stopRecording}>
              Stop
            </a>
          </div>
        </div>
      </div>
    );
  }
}
