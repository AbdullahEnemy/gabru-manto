import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GMChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }

    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          datasets: [
            {
              data: [20, 50, 100, 75, 25, 0],
              label: "Left dataset",

              // This binds the dataset to the left y axis
              yAxisID: "left-y-axis",
            },
            {
              data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
              label: "Right dataset",

              // This binds the dataset to the right y axis
              yAxisID: "right-y-axis",
            },
          ],
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        options: {
          scales: {
            "left-y-axis": {
              type: "linear",
              position: "left",
            },
            "right-y-axis": {
              type: "linear",
              position: "right",
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <canvas style={{ width: "100%", height: "100%" }} ref={chartContainer} />
    </div>
  );
};

export default GMChart;
