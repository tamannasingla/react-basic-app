import React from "react";
import ChartBar from "../UI/ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.data.map((dataPoint) => dataPoint.value);
  const max = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.data.map((dataPoint, idx) => (
        <ChartBar
          key={idx}
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
