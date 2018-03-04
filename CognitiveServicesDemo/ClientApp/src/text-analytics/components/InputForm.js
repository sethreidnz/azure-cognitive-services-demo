import React, { Component } from "react";
import "./InputForm.css";

export class InputForm extends Component {
  state = {
    textToAnalyse: "",
    detectLanguage: true,
    getKeyPhrases: true,
    getSentiment: true
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  submit = () => {
    const { analyseText } = this.props;
    const { textToAnalyse, detectLanguage, getKeyPhrases, getSentiment } = this.state;
    analyseText(textToAnalyse, detectLanguage, getKeyPhrases, getSentiment);
  }
  render() {
    return (
      <div className="input-form">
        <div className="field">
          <div className="control">
            <input
              name="textToAnalyse"
              className="input text-to-analyse"
              type="search"
              value={this.state.textToAnalyse}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="detectLanguage"
                type="checkbox"
                checked={this.state.detectLanguage}
                onChange={this.handleInputChange}
              />
              Detect Language
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="getKeyPhrases"
                type="checkbox"
                checked={this.state.getSentiment}
                onChange={this.handleInputChange}
              />
              Get Key Phrases
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="getSentiment"
                type="checkbox"
                checked={this.state.getSentiment}
                onChange={this.handleInputChange}
              />
              Get Sentiment
            </label>
          </div>
        </div>
        <a
          className="button"
          onClick={this.submit}
        >
          Analyse Text
        </a>
      </div>
    );
  }
}
