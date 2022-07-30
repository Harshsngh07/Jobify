import React from "react";
import Wrapper from "../wrappers/StatItem";
export const StatItem = ({ color, bcg, count, icon, title }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};
