import React, { Component } from "react";
import "./InputForm.css";

export class InputForm extends Component {
  state = {
    textToAnalyse: "",
    detectLanguage: true,
    getKeyPhrases: true,
    getSentiment: true,
    getEntities: true
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleKeyPress = event => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
      this.submit();
      return false;
    }
  }
  submit = () => {
    const { analyseText } = this.props;
    const { textToAnalyse, detectLanguage, getKeyPhrases, getSentiment, getEntities } = this.state;
    analyseText(textToAnalyse, detectLanguage, getKeyPhrases, getSentiment, getEntities);
  }
  render() {
    return (
      <div className="input-form">
        <div className="field">
          <div className="control">
            <textarea
              name="textToAnalyse"
              className="textarea"
              placeholder="Enter text for analysis"
              type="search"
              value={this.state.textToAnalyse}
              onChange={this.handleInputChange}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.submit()
                }
              }}
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
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="getEntities"
                type="checkbox"
                checked={this.state.getEntities}
                onChange={this.handleInputChange}
              />
              Get Entities
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
