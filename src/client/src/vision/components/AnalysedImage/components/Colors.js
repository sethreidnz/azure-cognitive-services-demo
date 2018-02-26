import React from "react";

export const Colors = ({ colors }) => (
  <div>
    <h3>Colors:</h3>
    <div id="meta" class="field is-grouped is-grouped-multiline">
      <div class="control">
        <div class="tags has-addons">
          <span class="tag">Accent Color</span>
          <a class="tag" style={{ backgroundColor: `#${colors.accentColor}` }}>
            &nbsp;&nbsp;
          </a>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag">Dominant Background</span>
          <a
            class="tag"
            style={{
              backgroundColor: `${colors.dominantColorBackground.toLowerCase()}`
            }}
          >
            &nbsp;&nbsp;
          </a>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag">Dominant Foreground</span>
          <a
            class="tag"
            style={{
              backgroundColor: `${colors.dominantColorForeground.toLowerCase()}`
            }}
          >
            &nbsp;&nbsp;
          </a>
        </div>
      </div>
    </div>
  </div>
);
