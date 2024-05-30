// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, 
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import lineChartData from './DATA.js';  // default exportとしてインポート

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// );

// export const LineGraph = () => {
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "bottom",
//             },
//             title: {
//                 display: true,
//                 text: "This is A Graph Representing My Daily Steps",
//             },
//         },
//     };

//     console.log(lineChartData);

//     return <Line options={options} data={lineChartData} />;
// };




// **********************************************************************


import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

export const LineGraph = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data) {
      const transformedData = transformData(data);
      setChartData(transformedData);
    }
  }, [data]);

  const getCurrentYearMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
  };

  const generateDateRange = (yearMonth) => {
    const daysInMonth = new Date(yearMonth.split('-')[0], yearMonth.split('-')[1], 0).getDate();
    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(`${yearMonth}-${i.toString().padStart(2, '0')}`);
    }
    return dates;
  };

  const transformData = (data) => {
    const yearMonth = getCurrentYearMonth();
    const dateRange = generateDateRange(yearMonth);
    const dateMap = {};

    data.forEach(item => {
      const date = item.date.split('T')[0]; // 日付部分のみを取得
      if (!dateMap[date]) {
        dateMap[date] = {};
      }
      if (!dateMap[date][item.category.name]) {
        dateMap[date][item.category.name] = 0;
      }
      dateMap[date][item.category.name] += item.amount;
    });

    const categories = Array.from(new Set(data.map(item => item.category.name)));

    const datasets = categories.map(category => ({
      label: category,
      data: dateRange.map(date => dateMap[date] && dateMap[date][category] ? dateMap[date][category] : 0),
      borderColor: getRandomColor(),
      fill: false,
    }));

    return {
      labels: dateRange,
      datasets: datasets,
    };
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Category-wise Price Trend for This Month',
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'yyyy-MM-dd',
          min: `${getCurrentYearMonth()}-01`,
          max: `${getCurrentYearMonth()}-${new Date(getCurrentYearMonth().split('-')[0], getCurrentYearMonth().split('-')[1], 0).getDate()}`,
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  return chartData ? <Line options={options} data={chartData} /> : <div>Loading...</div>;
};