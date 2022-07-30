import React, { useState } from "react";
import BarChartComponent from "./BarChartComponent";
import { useAppContext } from "../../context/AppContext";
import Wrapper from "../wrappers/ChartsContainer";
import AreaChartComponent from "./AreaChartComponent";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
