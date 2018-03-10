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
    const {
      config: { textAnalytics, bingSearch, contentModerator }
    } = this.props;
    return (
      textAnalytics.key &&
      textAnalytics.region &&
      bingSearch.key &&
      contentModerator &&
      contentModerator.key &&
      contentModerator.region
    );
  };
  analyseText = async (
    text,
    detectLanguage,
    getKeyPhrases,
    getSentiment,
    getEntities
  ) => {
    const {
      config: { textAnalytics, bingSearch, contentModerator }
    } = this.props;
    this.setState({
      isAnalysing: true,
      analysisResult: null
    });
    const analysisResults = await analyseText(
      textAnalytics.key,
      textAnalytics.region,
      contentModerator.key,
      contentModerator.region,
      bingSearch.key,
      text,
      detectLanguage,
      getKeyPhrases,
      getSentiment,
      getEntities
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
          text={`Configuration is invalid. Please refer to the readme to configure the your user secrets for Text Analytics API, Content Moderator and Bing Search APIs v7`}
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
            <TextAnalyticsResults
              results={analysisResults}
              isAnalysing={isAnalysing}
            />
          </div>
        </div>
      </section>
    );
  }
}
