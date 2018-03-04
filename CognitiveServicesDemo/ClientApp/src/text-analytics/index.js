import React, { Component } from 'react';

import { Notification } from "../components/Notification";

export class TextAnalytics extends Component {
  state = {
  };
  configIsValid = () => {
    const {
      config: { textAnalytics }
    } = this.props;
    return textAnalytics.key && textAnalytics.region;
  }
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
      <div className="vision">
        <header>
          <h1 className="title is-1">Microsoft Text Analytics API</h1>
        </header>
        
      </div>
    )
  }
}