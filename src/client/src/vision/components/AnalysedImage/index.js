import React from "react";
import "./AnalysedImage.css";
import { formatConfidenceAsPercentage } from "../../../utility";

import { Categories } from "./components/Categories";
import { Colors } from "./components/Colors";
import { ImageDisplay } from "./components/ImageDisplay";
import { Loader } from "../../../components/loader";
import { Tags } from "./components/Tags";

export const AnalysedImage = ({ selectedImage, isAnalysing, data }) => {
  if (isAnalysing) return <Loader />;
  const { color, categories, tags } = data;
  return (
    <div className="analysed-image columns">
      <div className="columns">
        <div class="column">
          <ImageDisplay selectedImage={selectedImage} description={data.description}/>
        </div>
        <div class="column">
          <Colors colors={color} />
          <br />
          <Categories categories={categories} />
          <br />
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
};
