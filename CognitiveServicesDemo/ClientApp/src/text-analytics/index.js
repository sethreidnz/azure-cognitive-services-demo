import React, { Component } from "react";
import "./TextAnalytics.css";
import { analyseText } from "../api/text-analytics";

import { InputForm } from "./components/InputForm";
import { Notification } from "../components/Notification";

export class TextAnalytics extends Component {
  state = {
    textToAnalyse: "",
    detectLanguage: false,
    getKeyPhrases: false,
    getSentiment: false
  };
  configIsValid = () => {
    const { config: { textAnalytics } } = this.props;
    return textAnalytics.key && textAnalytics.region;
  };
  analyseText = (text, detectLanguage, getKeyPhrases, getSentiment) => {
    const { config: { textAnalytics } } = this.props;
    analyseText(
      text,
      detectLanguage,
      getKeyPhrases,
      getSentiment,
      textAnalytics.key,
      textAnalytics.region
    );
  };
  render() {
    if (!this.configIsValid()) {
      return (
        <Notification
          type="danger"
          text={`Configuration is invalid. Please refer to the readme to configure the your user secrets for Text Analytics API`}
        />
      );
    }
    return (
      <div className="vision container">
        <header>
          <h1 className="title is-1">Microsoft Text Analytics API</h1>
        </header>
        <div className="columns">
          <div className="column is-third">
            <InputForm analyseText={this.analyseText} />
          </div>
          <div className="column is-two-thirds" />
        </div>
      </div>
    );
  }
}
