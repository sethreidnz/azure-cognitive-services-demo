import React from "react";
import "./TextAnalyticsResults.css";
import { SentimentEmoji } from "./SentimentEmoji";

import { Loader } from "../../components/Loader";
import { TagList } from "../../components/TagList";

export const TextAnalyticsResults = ({ results, isAnalysing }) => {
  if (isAnalysing) return <Loader />;
  if (results === null) return <div />;
  const sentiment =
    results.sentiment && results.sentiment.documents.length > 0
      ? results.sentiment.documents[0].score
      : null;
  const languages =
    results.language && results.language.documents.length > 0
      ? results.language.documents[0].detectedLanguages.map(
          language => language.name
        )
      : null;
  const keyPhrases =
    results.keyPhrases && results.keyPhrases.documents.length > 0
      ? results.keyPhrases.documents[0].keyPhrases
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
          <p>
            <strong>Detected Languages</strong>
          </p>
          <p>
            <TagList values={languages} />
          </p>
          <p>
            <strong>Key Phrases</strong>
          </p>
          <p>
            <TagList values={keyPhrases} />
          </p>
        </div>
      )}
    </div>
  );
};
