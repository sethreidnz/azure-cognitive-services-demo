import React from 'react';
import "./SentimentEmoji.css"

export const SentimentEmoji = ({ sentimentScore }) => {
  let emoji;
  if (sentimentScore >= .75) {
    emoji = "😁";
  } else if (sentimentScore >= .5) {
    emoji = "😃";
  } else if (sentimentScore >= .25) {
    emoji = "😒";
  } else if (sentimentScore >= 0) {
    emoji = "😠";
  }
  return (
    <a className="sentiment-emoji" title="U+1F601">
      {emoji}
    </a>
  )
}