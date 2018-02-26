import React from "react";
import classnames from "classnames";
import {
  formatConfidenceAsPercentage,
  getConfidenceColorClass
} from "../../../../utility";

export const Categories = ({ categories }) => (
  <div>
    <h3 className="title title is-4">Categories:</h3>
    <div id="meta" class="field is-grouped is-grouped-multiline">
      <div class="control">
        <div class="tags has-addons">
          {categories.map(category => (
            <div class="control">
              <div class="tags has-addons">
                <span class="tag">{category.name}</span>
                <span
                  class={classnames({
                    tag: true,
                    [`${getConfidenceColorClass(category.score)}`]: true
                  })}
                >
                  {formatConfidenceAsPercentage(category.score)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
