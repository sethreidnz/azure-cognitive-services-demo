import React, { Component } from "react";
import { Loader } from "../../components/Loader";

export class FaceApiResult extends Component {
  imageCanvas = null;
  render(){
    const { isAnalysing, detectedFaces, imageUrl } = this.props;
    if (isAnalysing) return <Loader />; 
    if (!detectedFaces || detectedFaces.length === 0) return <div />; 
    return (
      <div className="imageResult">
        {imageUrl && <img src={imageUrl} alt="analysed face"/> }
        {detectedFaces.map((face, index) => (
          <div key={index} className="detected-face">
            <h3 className="title is-3">Face number {index + 1}</h3>    

            <h4 className="title is-4">Face Rectangle</h4>
            <pre>
              {JSON.stringify(face.faceRectangle, null, 2)}
            </pre>

            <h4 className="title is-4">Face Attributes</h4>
            <pre>
              {JSON.stringify(face.faceAttributes, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    )
  }
}
