import React from "react";
import "./TextAnalyticsResults.css";
import { SentimentEmoji } from "./SentimentEmoji";

import { Loader } from "../../components/Loader";
import { TagList } from "../../components/TagList";
import { Entity } from "./Entity";

const ProfanityMessage = ({ profanities }) => (
  <div className="content">
    <p>That's rude you shouldn't say that:</p>
    <ul>
      {profanities.map(profanity => <li>{profanity.Term}</li>)}
    </ul>
  </div>
);

export const TextAnalyticsResults = ({ results, isAnalysing }) => {
  if (isAnalysing) return <Loader />;
  if (results === null) return <div />;
  if (results.profanity && results.profanity.length > 0)
    return <ProfanityMessage profanities={results.profanity} />;
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
  const entities =
    results.entities &&
    results.entities.entities &&
    results.entities.entities.value &&
    results.entities.entities.value.length > 0
      ? results.entities.entities.value
      : null;
  return (
    <div className="text-analytics-results">
      {sentiment && (
        <div className="sentiment">
          <h3 className="title is-3">Sentiment Score: {sentiment}</h3>
          <p>
            <SentimentEmoji sentimentScore={sentiment} />
          </p>
        </div>
      )}
      <h3 className="title is-3">Detected Languages</h3>
      <p>
        <TagList values={languages} />
      </p>
      <h3 className="title is-3">Key Phrases</h3>
      <p>
        <TagList values={keyPhrases} />
      </p>
      <h3 className="title is-3">Entities</h3>
      {entities && entities.map(entity => <Entity entity={entity} />)}
    </div>
  );
};
