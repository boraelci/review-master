import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';

export class ChartWrapper {
  radar(options: any, data: any) {
    ChartJS.register(
      RadialLinearScale,
      PointElement,
      LineElement,
      Title,
      Filler,
      Tooltip,
      Legend,
    );

    return <Radar options={options} data={data} />;
  }

  line(options: any, data: any) {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
    );

    return <Line options={options} data={data} />;
  }
}
