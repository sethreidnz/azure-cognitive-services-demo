import React from "react";
import { formatConfidenceAsPercentage } from "../../../../utility";

export const ImageDisplay = ({ selectedImage, description }) => (
  <div>
    <img src={selectedImage.contentUrl} alt={selectedImage.name} />
    <p>
      <strong>Caption</strong>:{" "}
      {description && description.captions.length > 0
        ? description.captions[0].text
        : ""}
    </p>
    <p>
      <strong>Confidence</strong>:{" "}
      {description && description.captions.length > 0
        ? formatConfidenceAsPercentage(description.captions[0].confidence)
        : ""}
    </p>
  </div>
);
