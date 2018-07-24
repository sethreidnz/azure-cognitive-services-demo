import React, { Component } from "react";
import "./InputForm.css";
import CSVReader from "react-csv-reader";

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
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      this.submit();
      return false;
    }
  };
  //   createPayload = (data) => {
  //     let newPayload = [];
  // for(let i = 0; i < data.length; i++){
  //   newPayload[i] = data[i][0]
  // }
  // console.log(newPayload);
  // }

handleForce = data => {
    const { tomsAnalyseText } = this.props;
    let newPayload = [];
    for (let i = 0; i < data.length; i++) {
      newPayload[i] = data[i][0];
    }
    let newReturn = [];
    for (let i = 0; i < newPayload.length; i++) {
      setTimeout(function () {
      let newObjectToStore = {};
      let objectRecieved = {};
      newObjectToStore.originalQuery = newPayload[i]
  tomsAnalyseText(newPayload[i], true, true, true, true)
        .then(textReturn =>
        newObjectToStore.return = { keyPhrases: 
          textReturn.keyPhrases.documents[0].keyPhrases,
        sentiment : textReturn.sentiment.documents[0].score
        });
      // if(objectRecieved.keyPhrases && objectRecieved.keyPhrases.documents && objectRecieved.keyPhrases.documents[0] && objectRecieved.keyPhrases.documents[0].keyPhrases){
      //   newObjectToStore.keyPhrases = objectRecieved.keyPhrases.documents[0].keyPhrases
      // };
      // if (objectRecieved.sentiment && objectRecieved.sentiment.documents && objectRecieved.sentiment.documents[0] && objectRecieved.sentiment.documents[0].score){
      //   newObjectToStore.sentiment = objectRecieved.sentiment.documents[0].score
      // };

      newReturn[i] = newObjectToStore;
      console.log(newObjectToStore);
      console.log(newReturn);
    }, 5000);
    }
  };
  submit = () => {
    const { analyseText } = this.props;
    const {
      textToAnalyse,
      detectLanguage,
      getKeyPhrases,
      getSentiment,
      getEntities
    } = this.state;
    analyseText(
      textToAnalyse,
      detectLanguage,
      getKeyPhrases,
      getSentiment,
      getEntities
    );
  };

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
                if (event.key === "Enter") {
                  this.submit();
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
        <a className="button" onClick={this.submit}>
          Analyse Text
        </a>
        <div className="CSV">
          {/* {reader} */}
          <div className="CSV-Loader">
            <CSVReader
              cssClass="react-csv-input"
              label="Select CSV to Analyse"
              onFileLoaded={this.handleForce}
            />
          </div>
        </div>
      </div>
    );
  }
}
