import React from "react";
import "./AnalysedImage.css";
import { Loader } from "../../../components/loader";
import { Colors } from './components/Colors'

export const AnalysedImage = ({ selectedImage, isAnalysing, data }) => {
  if (isAnalysing) return <Loader />;
  const { color } = data;
  return (
    <div className="analysed-image columns">
      <div className="columns">
        <div class="column">
          <img src={selectedImage.contentUrl} />
        </div>
        <div class="column">
          <Colors colors={color} />
        </div>
      </div>
    </div>
  );
};
