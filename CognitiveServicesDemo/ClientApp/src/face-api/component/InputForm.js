import React, { Component } from "react";

export class InputForm extends Component {
  state = {
    imageUrlToAnalyse: "",
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
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
    const { onSubmit } = this.props;
    const { imageUrlToAnalyse } = this.state;
    onSubmit(imageUrlToAnalyse);
  }
  render() {
    return (
      <div className="input-form">
        <div className="field">
          <div className="control">
            <input
              name="imageUrlToAnalyse"
              className="input"
              placeholder="Enter text for analysis"
              type="text"
              value={this.state.imageUrlToAnalyse}
              onChange={this.handleInputChange}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.submit()
                }
              }}
            />
          </div>
        </div>
        <a
          className="button"
          onClick={this.submit}
        >
          Analyse Image
        </a>
      </div>
    );
  }
}
