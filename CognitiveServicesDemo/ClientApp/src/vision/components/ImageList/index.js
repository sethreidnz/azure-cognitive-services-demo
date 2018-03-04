import React from "react";
import './ImageList.css';

export const ImageList = ({ children }) => (
  <ul className="image-list columns">
      {children}
  </ul>
);
