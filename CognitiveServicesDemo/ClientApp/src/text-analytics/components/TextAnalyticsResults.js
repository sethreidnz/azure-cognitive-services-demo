import React, { Component } from "react";
import "./TextAnalyticsResults.css";
import { SentimentEmoji } from "./SentimentEmoji";

import { Loader } from "../../components/Loader";

export const TextAnalyticsResults = ({ results, isAnalysing }) => {
  if (isAnalysing) return <Loader />;
  if (results === null) return <div />;
  const sentiment =
    results.sentiment && results.sentiment.documents.length > 0
      ? results.sentiment.documents[0].score
      : null;
  return (
    <div className="text-analytics-results">
      {sentiment && (
        <div className="sentiment">
          <p>
            <strong>Sentiment Score</strong>: {sentiment}
          </p>
          <p>
            <SentimentEmoji sentimentScore={sentiment} />
          </p>
        </div>
      )}
    </div>
  );
};
