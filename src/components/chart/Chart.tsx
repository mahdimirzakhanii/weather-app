import { LineChart } from "@mui/x-charts/LineChart";
import type { TData } from "../../context/DataContext";

interface Props {
  dataChart: TData[];
}

const Chart = ({ dataChart }: Props) => {
  if (!dataChart || dataChart.length === 0) {
    return <div style={{ textAlign: "center" }}>Loading chart...</div>;
  }

  // تبدیل تاریخ‌ها به ساعت برای نمایش محور X
  const xData = dataChart.map((d) => {
    const date = new Date(d.dt_txt);
    return date.getHours(); // فقط ساعت (0 تا 23)
  });

  // دمای هر بازه زمانی
  const yData = dataChart.map((d) => d.main?.temp);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <LineChart
        xAxis={[
          {
            data: xData,
            label: "Hour",
            tickLabelStyle: { fontSize: 10 },
          },
        ]}
        series={[
          {
            data: yData,
            label: "Temperature °C",
            color: "#4f9cff",
          },
        ]}
        height={350}
        grid={{ vertical: false, horizontal: true }}
      />
    </div>
  );
};

export default Chart;
