import React from "react";
import classnames from "classnames";
import {
  formatConfidenceAsPercentage,
  getConfidenceColorClass
} from "../../../../utility";

export const Tags = ({ tags }) => (
  <div>
    <h3 className="title title is-4">Tags:</h3>
    <div id="meta" class="field is-grouped is-grouped-multiline">
        {tags.map(tag => (
            <div class="control">
              <div class="tags has-addons">
                <span class="tag">{tag.name}</span>
                <a
                  class={classnames({
                    tag: true,
                    [`${getConfidenceColorClass(tag.confidence)}`]: true
                  })}
                >
                  {formatConfidenceAsPercentage(tag.confidence)}
                </a>
              </div>
            </div>
          ))}
    </div>
  </div>
);
