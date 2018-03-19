import React from "react";
import "./SearchResults.css";

import { ImageList } from "../ImageList";
import { ImageListItem } from "../ImageListItem";
import { Loader } from "../../../components/Loader";

export const SearchResults = ({
  isSearching,
  searchText,
  searchResults,
  selectedImage,
  getThumbnailUrl,
  onImageClick
}) => {
  if (isSearching) return <Loader />;
  if (!searchResults) return <p>Type in the search box to search</p>;
  if (searchText && searchResults && searchResults.length === 0)
    return <p>No results found</p>;

  return (
    <div className="image-search-results">
      <ImageList>
        {searchResults.map(image => (
          <ImageListItem
            key={image.thumbnailUrl}
            imageUrl={getThumbnailUrl(image)}
            imageAlt={image.name}
            onClick={() => onImageClick(image)}
            isSelected={selectedImage && selectedImage.id === image.id}
          />
        ))}
      </ImageList>
    </div>
  );
};
