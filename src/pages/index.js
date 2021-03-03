import React from "react";
import { graphql } from "gatsby";

const ComponentName = ({ data }) => (
  <main style={{ padding: 16 }}>
    <i className="nes-mario" />
    <h1>Super Mario Bros</h1>
    <section
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
        gridGap: 16,
      }}
    >
      {data.allLevel.nodes.map((level) => (
        <div className="nes-btn">
          <div>{level.name}</div>
          <div>Setting: {level.setting}</div>
        </div>
      ))}
    </section>
  </main>
);

export const query = graphql`
  {
    allLevel {
      nodes {
        id
        name
        setting
      }
    }
  }
`;

export default ComponentName;
