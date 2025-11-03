// Chart.tsx
import { LineChart } from "@mui/x-charts/LineChart";
import type { TData } from "../../context/DataContext";

interface Props {
  dataChart: TData[];
  type?: "temp" | "feels_like" | "humidity" | "pressure";
}

const Chart = ({ dataChart, type = "temp" }: Props) => {
  if (!dataChart || dataChart.length === 0) {
    return <div style={{ textAlign: "center" }}>Loading chart...</div>;
  }

  const xData: number[] = dataChart.map((d) => {
    if (d.dt_txt) return new Date(d.dt_txt).getTime();
    if ((d as any).dt) return ((d as any).dt as number) * 1000;
    return 0;
  });

  const yData: (number | null)[] = dataChart.map((d) => {
    const main = d.main || (d as any).main || {};
    switch (type) {
      case "feels_like":
        return main.feels_like ?? null;
      case "humidity":
        return main.humidity ?? null;
      case "pressure":
        return main.pressure ?? null;
      default:
        return main.temp ?? null;
    }
  });

  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < xData.length; i++) {
    const x = xData[i];
    const y = yData[i];
    if (x && y !== null && typeof y === "number" && !Number.isNaN(y)) {
      points.push({ x, y });
    }
  }

  if (points.length === 0) {
    console.warn("Chart: no valid points to render", {
      xDataSlice: xData.slice(0, 5),
      yDataSlice: yData.slice(0, 5),
    });
    return <div style={{ textAlign: "center" }}>No valid chart data</div>;
  }

  return (
    <div style={{ width: "100%", maxHeight: 250 }}>
      <LineChart
        xAxis={[
          {
            data: points.map((p) => p.x),
            label: "Time",
            tickLabelStyle: { fontSize: 10 },
          },
        ]}
        series={[
          {
            data: points.map((p) => p.y),
            color: "#4f9cff",
          },
        ]}
        height={250}
        grid={{ vertical: false, horizontal: true }}
      />
    </div>
  );
};

export default Chart;
