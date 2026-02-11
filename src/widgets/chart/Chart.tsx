// src/widgets/chart/HighchartsLine.tsx
import React, { FC, useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

interface HighchartsLineProps {
  title?: string;
}

export const HighchartsLine: FC<HighchartsLineProps> = ({ title = 'ffsdfasdf' }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // @ts-ignore
    const chart = Highcharts.chart(chartRef.current, {
      chart: {
        type: 'line',
        zoomType: 'x',
      },
      title: {
        text: title,
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1,
        title: {
          text: 'Value',
        },
      },
      tooltip: {
        valueDecimals: 2,
      },
      series: [
        {
          name: 'Random data',
          data: (function () {
            // Генерация данных как в демо
            const data = [];
            let y = 1;
            for (let i = -19; i <= 0; i += 1) {
              y += Math.random() * 10 - 5;
              data.push([Date.UTC(2023, 11, i), Math.abs(y)]);
            }
            return data;
          })(),
        },
      ],
      responsive: {
        rules: [
          {
            condition: { maxWidth: 500 },
            chartOptions: {
              legend: { layout: 'horizontal', align: 'center', verticalAlign: 'bottom' },
            },
          },
        ],
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};
