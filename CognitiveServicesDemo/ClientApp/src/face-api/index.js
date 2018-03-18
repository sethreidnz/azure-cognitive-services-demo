import React, { Component } from "react";
import "./FaceApi.css";

import { Notification } from "../components/Notification";
import { FaceApiResult } from "./component/FaceApiResult";
import { detectFaces } from "../api/face-api";
import { InputForm } from "./component/InputForm";

export class FaceApi extends Component {
  state = {
    isAnalysing: false,
    detectedFaces: [],
    analysedImageUrl: null
  };
  configIsValid = () => {
    const { config: { faceApi } } = this.props;
    return faceApi.key && faceApi.region;
  };
  onSubmitUrl = async imageUrl => {
    const { config: { faceApi } } = this.props;
    this.setState({ isAnalysing: true });
    const detectedFaces = await detectFaces(
      faceApi.key,
      faceApi.region,
      imageUrl
    );
    this.setState({
      isAnalysing: false,
      detectedFaces: detectedFaces,
      imageUrl: imageUrl
    });
  };
  render() {
    if (!this.configIsValid()) {
      return (
        <Notification
          type="danger"
          text="Please go to the readme and configure the your user secrets for Face API"
        />
      );
    }
    const { isAnalysing, detectedFaces, imageUrl } = this.state;
    return (
      <div className="face-api container">
        <header>
          <h1 className="title is-1">Microsoft Face API</h1>
        </header>
        <div className="columns">
          <InputForm onSubmit={this.onSubmitUrl} />
        </div>
        <div className="columns">
          <FaceApiResult
            imageUrl={imageUrl}
            isAnalysing={isAnalysing}
            detectedFaces={detectedFaces}
          />
        </div>
      </div>
    );
  }
}
