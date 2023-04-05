import * as React from 'react';

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

/**
 * This class provides a wrapper around Chart.js and React-Chartjs-2 components,
 * allowing for easy rendering of radar and line charts with given options and data.
 */
export class ChartWrapper {
  /**
   * Renders a Radar chart with the given options and data.
   *
   * @param {any} options - Configuration options for the radar chart.
   * @param {any} data - The data to be displayed in the radar chart.
   * @returns {React.ReactNode} A Radar chart component with the specified options and data.
   */
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

  /**
   * Renders a Line chart with the given options and data.
   *
   * @param {any} options - Configuration options for the line chart.
   * @param {any} data - The data to be displayed in the line chart.
   * @returns {React.ReactNode} A Line chart component with the specified options and data.
   */
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
