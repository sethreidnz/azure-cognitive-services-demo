import React from "react";
import "./Entity.css";

export const Entity = ({ entity: { name, url, description, image } }) => {
  return (
    <div className="entity">
      <h4 className="title is-4">{name}</h4>
      <p>{description}</p>
      <p>
        <a href={url} target="_blank">
          Read More on Wikipedia
        </a>
      </p>
      {image && (
        <p>
          <img src={image.thumbnailUrl} alt={image.name} />
        </p>
      )}
    </div>
  );
};
