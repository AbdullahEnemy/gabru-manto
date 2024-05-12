import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GMChart = ({ restaurantPoint = { x: 0, y: 0 } }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }

    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "Grid Area",
              data: [
                { x: -1, y: 1 },
                { x: 1, y: -1 },
              ],
              pointRadius: 0,
              borderWidth: 1,
            },
            {
              label: "Restaurant Point",
              data: [{ x: restaurantPoint["x"], y: restaurantPoint["y"] }],
              pointRadius: 10,
              backgroundColor: "rgb(246, 94, 47)",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.yLabel;
              },
            },
          },
          aspectRatio: 1, // Set the aspect ratio to 1 for equal width and height

          scales: {
            x: {
              type: "linear",
              position: "bottom",
              grid: {
                display: true,
                color: "rgba(0, 0, 0)", // Grid line color
              },
              ticks: {
                stepSize: 1, // Adjust the step size as needed
                min: -1, // Adjust the min value as needed
                max: 1, // Adjust the max value as needed
              },
            },
            y: {
              type: "linear",
              position: "left",
              grid: {
                display: true,
                color: "rgba(0, 0, 0)", // Grid line color
              },
              ticks: {
                stepSize: 1, // Adjust the step size as needed
                min: -1, // Adjust the min value as needed
                max: 1, // Adjust the max value as needed
              },
            },
          },
        },
      });
    }
  }, [restaurantPoint]);

  return (
    <div>
      <canvas style={{ width: "100%", height: "auto" }} ref={chartContainer} />
    </div>
  );
};

export default GMChart;
