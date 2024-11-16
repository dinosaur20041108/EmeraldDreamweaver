
import React, { useState, useEffect } from "react";
import ControlsPanel from "./ControlsPanel";
import MapDisplay from "./MapDisplay";
import DataVisualization from "./DataVisualization";
import FooterData from "./footer";

import "./App.css";


function App() {

  const [parameters, setParameters] = useState({
    gasEmission: 100,
    energyGrowth: 100,
    carToElectricRatio: 100,
    materialUsage: 100,
  });
  const handleParameterChange = (name, value) => {
    setParameters(prev => ({ ...prev, [name]: value }));
  };


  const [currentYearIndex, setCurrentYearIndex] = useState(2014);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYearIndex((prevIndex) => (prevIndex + 1 > 2040 ? 2014 : prevIndex + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="data-visualization">
        <DataVisualization parameters={parameters} />
      </div>
      <header class="header">
        <h1 class="title">Global Environment Report</h1>
        <div class="year-display">
          <h2>AD: {currentYearIndex}</h2>
        </div>
      </header>

      <div class="map-display">
        {/* <img src={require('./world_map.jpg')} height={1080} ></img> */}
        <MapDisplay parameters={parameters} />
      </div>
      <div className="controls-panel">
        <ControlsPanel parameters={parameters} onParameterChange={handleParameterChange} />
      </div>
      <FooterData parameters={parameters} />
    </div>
  );
}

// 导出App组件
export default App;