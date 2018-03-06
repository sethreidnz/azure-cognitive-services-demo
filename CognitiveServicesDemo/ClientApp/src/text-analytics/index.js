import React, { Component } from "react";
import "./TextAnalytics.css";
import { analyseText } from "../api/text-analytics";

import { InputForm } from "./components/InputForm";
import { Notification } from "../components/Notification";
import { TextAnalyticsResults } from "./components/TextAnalyticsResults";

export class TextAnalytics extends Component {
  state = {
    isAnalysing: false,
    analysisResults: null
  };
  configIsValid = () => {
    const { config: { textAnalytics } } = this.props;
    return textAnalytics.key && textAnalytics.region;
  };
  analyseText = async (text, detectLanguage, getKeyPhrases, getSentiment) => {
    const { config: { textAnalytics } } = this.props;
    this.setState({
      isAnalysing: true,
      analysisResult: null
    });
    const analysisResults = await analyseText(
      text,
      detectLanguage,
      getKeyPhrases,
      getSentiment,
      textAnalytics.key,
      textAnalytics.region
    );
    this.setState({
      isAnalysing: false,
      analysisResults
    });
  };
  render() {
    const { isAnalysing, analysisResults } = this.state;
    if (!this.configIsValid()) {
      return (
        <Notification
          type="danger"
          text={`Configuration is invalid. Please refer to the readme to configure the your user secrets for Text Analytics API`}
        />
      );
    }
    return (
      <section className="vision container">
        <header>
          <h1 className="title is-1">Microsoft Text Analytics API</h1>
        </header>
        <div className="columns">
          <div className="column is-third">
            <InputForm analyseText={this.analyseText} />
          </div>
          <div className="column is-two-thirds">
            <TextAnalyticsResults results={analysisResults} isAnalysing={isAnalysing} />
          </div>
        </div>
      </section>
    );
  }
}
