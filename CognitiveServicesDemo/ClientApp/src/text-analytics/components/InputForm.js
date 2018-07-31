import React, { Component } from "react";
import "./InputForm.css";
import CSVReader from "react-csv-reader";
import CsvCreator from "react-csv-creator";
const yes = true;

export class InputForm extends Component {
  state = {
    textToAnalyse: "",
    detectLanguage: true,
    getKeyPhrases: true,
    getSentiment: true,
    getEntities: true,
    CSVData: null,
    test: false,
    counter: 0
  };
  componentDidUpdate() {
    if (
      this.state.spreadsheet &&
      !this.state.test &&
      this.state.spreadsheet[0] &&
      this.state.spreadsheet[0].return
    ) {
      const headers = [
        {
          id: "first",
          display: "Original Text"
        },
        {
          id: "second",
          display: "Sentiment score"
        },
        {
          id: "third",
          display: "Key Words"
        }
      ];

      const rows = [];
      for (let i = 0; i < this.state.spreadsheet.length; i++) {
        rows[i] = {
          first: this.state.spreadsheet[i].originalQuery,
          second: this.state.spreadsheet[i].return
            ? this.state.spreadsheet[i].return.sentiment
              ? this.state.spreadsheet[i].return.sentiment
              : ""
            : "",
          third: this.state.spreadsheet[i].return
            ? this.state.spreadsheet[i].return.keyPhrases
              ? [this.state.spreadsheet[i].return.keyPhrases]
              : ""
            : ""
        };
      }
      this.setState({
        test: true,
        headers: headers,
        rows: rows
      });
    }
  }

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

  handleForce = data => {
    const { tomsAnalyseText } = this.props;
    let newPayload = [];
    for (let i = 0; i < data.length; i++) {
      newPayload[i] = data[i][0];
    }
    let newReturn = [];
    setTimeout(() => {
      for (let i = 0; i < newPayload.length; i++) {
          let newObjectToStore = {};
          newObjectToStore.originalQuery = newPayload[i];
          setTimeout(() => {
          tomsAnalyseText(newPayload[i], false, true, true, false).then(
            textReturn =>
              (newObjectToStore.return = {
                keyPhrases: textReturn.keyPhrases.documents[0].keyPhrases,
                sentiment: textReturn.sentiment.documents[0].score
              })
          )        }, 20000);
          ;
          newReturn[i] = newObjectToStore;
          if (newReturn.length === data.length) {
            this.setState({ spreadsheet: newReturn });
          }
      }
    }, 20000);
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
          {this.state.test ? (
            <div className="csv-save">
              <CsvCreator
                filename="my_cool_csv"
                headers={this.state.headers}
                rows={this.state.rows}
              >
                <p>Download CSV</p>
              </CsvCreator>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
