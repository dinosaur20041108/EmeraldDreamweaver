import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

let Mt_CO2e_data = [3955.735165,3878.488964,3745.621342,3696.109401,3712.686814,3939.226583,3829.26664,3855.030683,3854.717009,3697.124004,3872.891321,3895.71287,3889.990219,4075.758277,4506.892807,4924.117197,5167.997617,5441.458361,5555.897298,5538.069762,6080.686281,6311.091636,6332.015744,6358.823576,6425.251996,6286.63559,6130.934194,6067.820582,6206.749116,6210.73974,6180.972984,6497.622733,6537.543097,7163.542541,7322.34031,7484.658227,7650.574325,7820.168367,7993.521884,8170.718213,8351.84254,8536.981939,8726.225414,8919.663942,9117.390517,9319.500194,9526.090136,9737.259659,9953.11028,10173.74577,10399.27219,10629.79797,10865.43393,11106.29334,11352.49201,11604.14828,11861.38314,12124.32025,12393.08601,12667.80964,12948.62321];
let humman_data = [5293498452,5382640911,5470271607,5556732311,5642156981,5726848893,5811694918,5896174827,5979851049,6062415429,6144444748,6226487141,6308284566,6389592840,6471033757,6552787172,6635162568,6717583637,6801421733,6885608628,6969894715,7053988749,7141430933,7229458453,7317304568,7404251118,7490956237,7577110140,7661177849,7742724795,7821271846,7888963821,7951595433,8024997028,8106519459,8188300892,8270082325,8351863758,8433645191,8515426625,8597208058,8678989491,8760770924,8842552357,8924333790,9006115224,9087896657,9169678090,9251459523,9333240956,9415022389,9496803823,9578585256,9660366689,9742148122,9823929555,9905710988,9987492422,10069273855,10151055288,10232836721];
let Electricicy_data = [2121.847631,2146.787953,2130.016321,2136.796058,2159.510024,2192.729312,2231.287407,2253.593944,2275.120183,2306.894636,2374.956324,2367.41188,2421.166651,2485.835161,2562.79163,2639.778413,2715.39639,2804.277424,2825.222254,2775.879768,2938.463817,3002.378448,3026.079834,3084.410992,3105.268676,3239.442429,3306.789556,3375.536811,3445.713303,3517.348745,3590.473469,3665.118435,3741.31525,3819.096177,3898.494147,3979.54278,4062.276391,4146.730012,4232.939401,4320.94106,4410.772249,4502.471004,4596.076151,4691.627324,4789.164979,4888.730416,4990.365791,5094.114138,5200.019385,5308.126374,5418.480877,5531.12962,5646.1203,5763.501605,5883.323235,6005.635925,6130.491462,6257.942711,6388.043637,6520.849327,6656.41601];

function generateLabels(startYear, endYear) {
  const labels = [];
  for (let year = startYear; year <= endYear; year++) {
      labels.push(year.toString());
  }
  return labels;
}

function DataVisualization({ parameters }) {
  const [currentStartYear, setCurrentStartYear] = useState(2014);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartYear((prevYear) => (prevYear + 1 > 2040 ? 2014 : prevYear + 1));
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  const labels = generateLabels(currentStartYear, currentStartYear + 10);
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Carbon dioxide (CO2) emissions from Industrial Combustion (Energy) (Mt CO2e)",
        data: Mt_CO2e_data.slice(currentStartYear - 1990, currentStartYear - 1980).map(value => value * parameters.gasEmission * (0.9 + 0.1 * parameters.carToElectricRatio) * parameters.energyGrowth),
        borderColor: "red",
        fill: false,
      },
    ],
  };

  const options1 = {
    plugins: {
      title: {
        display: true,
        text: 'CO2 Emissions Over Time'
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Emissions (Mt CO2e)'
        },
        suggestedMin: 20000000,
        suggestedMax: 240000000,
        ticks: {
          callback: function(value) {
            return value.toExponential() + ' Mt'; 
          }
        }
      }
    }
  };

  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "人口，总数",
        data: humman_data.slice(currentStartYear - 1990, currentStartYear - 1980).map(value => value / 1000000),
        borderColor: "green",
        fill: false,
      },
    ]
  };

  const options2 = {
    plugins: {
      title: {
        display: true,
        text: 'Population Growth Over Time'
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Population (millions)'
        },
        ticks: {
          callback: function(value) {
            return value.toExponential() + ' M'; 
          }
        }
      }
    }
  };

  const data3 = {
    labels: labels,
    datasets: [
      {
        label: "耗电量（人均千瓦时）",
        data: Electricicy_data.slice(currentStartYear - 1990, currentStartYear - 1980).map(value => value * parameters.gasEmission * (0.9 + 0.1*parameters.carToElectricRatio) * parameters.energyGrowth),
        borderColor: "blue",
        fill: false,
      },
    ]
  };

  const options3 = {
    plugins: {
      title: {
        display: true,
        text: 'Electricity Consumption per Capita'
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Electricity (kWh per capita)'
        },
        ticks: {
          callback: function(value) {
            return value.toExponential() + ' kWh'; 
          }
        }
      }
    }
  };

  return (
    <div className="data-visualization">
      <h3>Data Visualization</h3>
      <div className="data-visualization-content">
        <div className="data-visualization-chart"><Line data={data} options={options1} /></div>
        <div className="data-visualization-chart"><Line data={data2} options={options2} /></div>
        <div className="data-visualization-chart"><Line data={data3} options={options3} /></div>
      </div>
    </div>
  );
}

export default DataVisualization;
