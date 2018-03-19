import React from "react";
import "./SearchSuggestion.css";

export const SearchSuggestions = ({ suggestions, search }) => {
  if (!suggestions || suggestions.length === 0) return <div />;
  const topSuggestions = suggestions.slice(
    0,
    suggestions.length >= 3 ? 3 : suggestions.length - 1
  );
  return (
    <div className="search-suggestions">
      <p>Search Suggestions:</p>
      <ul>
      {topSuggestions.map((suggestion, index, array) => (
        <li key={index}><a onClick={() => search(suggestion.text)}>{suggestion.text}</a></li>
      ))}
      </ul>
    </div>
  );
};
