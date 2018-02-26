import React, { Component } from "react";
import classnames from 'classnames';
import "./ImageListItem.css";

export const ImageListItem = ({ imageUrl, isSelected, onClick }) => {
  const classNames = classnames({ 
    'image-list-item': true,
    'column': true,
    'is-selected': isSelected
  });
  return (
    <li className={classNames} onClick={onClick}>
      <img src={imageUrl} />
    </li>
  );
};
