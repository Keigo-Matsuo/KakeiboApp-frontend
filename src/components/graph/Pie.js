// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, 
//     Tooltip,
//     Legend,
//     ArcElement,
// } from 'chart.js';
// import pieChartData from './PIE_DATA.js';  // default exportとしてインポート

// import 'chartjs-plugin-datalabels';

// ChartJS.register(
//     Tooltip,
//     Legend,
//     ArcElement,
// );

// export const PieGraph = () => {
//     const options = {};

//     console.log(pieChartData);

//     return <Pie options={options} data={pieChartData} />;
// };


import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import 'chartjs-plugin-datalabels';

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieGraph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/kakeibo')
      .then(response => response.json())
      .then(data => {
        const aggregatedData = aggregateData(data);
        setChartData(aggregatedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const aggregateData = (data) => {
    const categoryMap = {};

    data.forEach(item => {
      if (categoryMap[item.category]) {
        categoryMap[item.category] += item.price;
      } else {
        categoryMap[item.category] = item.price;
      }
    });

    // カテゴリごとに金額が大きい順にソート
    const sortedCategories = Object.entries(categoryMap).sort(([, a], [, b]) => b - a);

    console.log(typeof sortedCategories);

    // ソートされた配列からcategoryとpriceを抽出
    const labels = sortedCategories.map(([category]) => category);
    const prices = sortedCategories.map(([, price]) => price);

    return {
      labels: labels,
      datasets: [
        {
          label: "Category-wise Price",
          data: prices,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          hoverOffset: 4,
        },
      ],
    };
  };

  const options = {};

  return chartData ? <Pie options={options} data={chartData} style={{ width: '50vw'}} /> : <div>Loading...</div>;
};
