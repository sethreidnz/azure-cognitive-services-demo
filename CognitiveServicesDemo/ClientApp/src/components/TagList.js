import React from 'react';

export const TagList = ({ values }) => {
  return (
    values.map(values => 
      <div className="tags has-addons" key={Math.random()}>
        <span className="tag">{values}</span>
      </div>
    )
  )
}