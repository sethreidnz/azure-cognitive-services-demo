import React from "react";

export const Colors = ({ colors }) => (
  <div>
    <h3 className="title title is-4">Colors:</h3>
    <div id="meta" class="field is-grouped is-grouped-multiline">
      <div class="control">
        <div class="tags has-addons">
          <span class="tag">Accent Color</span>
          <span class="tag" style={{ backgroundColor: `#${colors.accentColor}` }}>
            &nbsp;&nbsp;
          </span>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag">Dominant Background</span>
          <span
            class="tag"
            style={{
              backgroundColor: `${colors.dominantColorBackground.toLowerCase()}`
            }}
          >
            &nbsp;&nbsp;
          </span>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag">Dominant Foreground</span>
          <span
            class="tag"
            style={{
              backgroundColor: `${colors.dominantColorForeground.toLowerCase()}`
            }}
          >
            &nbsp;&nbsp;
          </span>
        </div>
      </div>
    </div>
  </div>
);
