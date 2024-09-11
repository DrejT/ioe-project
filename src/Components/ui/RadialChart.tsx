import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export default function RadialChart() {
  const deg = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "celsius",
  });
  const chartOptions: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90, // Start from top
        endAngle: 90, // End at bottom for semi-circle effect
        hollow: {
          margin: 10,
          size: "70%", // Inner hollow circle size
        },
        // track: {
        //   strokeWidth: "200px", // Makes the track (background) full width
        // },
        dataLabels: {
          name: {
            offsetY: -20, // Moves the name label higher
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            offsetY: 10, // Moves the value label lower
            color: "#111",
            fontWeight: "bold",
            fontSize: "50px",
            show: true,
          },
          total: {
            show: true,
            label: "Temperature",
            formatter: () => deg.format(25), // Total value displayed at the bottom
          },
        },
        // barHeight: "200px", // Increases the width of the bar itself
      },
    },
    labels: ["Progress"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal", // Or 'vertical' depending on your design
        gradientToColors: ["#FF0000"], // Red
        stops: [0, 100],
      },
    },
    colors: ["#0000FF"], // Blue
  };

  const chartSeries = [70]; // Percentage value for the radial chart

  return (
    <div className="h-1/2">
      <Chart options={chartOptions} series={chartSeries} type="radialBar" />
    </div>
  );
}
