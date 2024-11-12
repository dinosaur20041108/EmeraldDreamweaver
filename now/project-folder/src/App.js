
import React, { useState } from "react";
import ControlsPanel from "./ControlsPanel";
import MapDisplay from "./MapDisplay";
import DataVisualization from "./DataVisualization";
import FooterData from "./footer";

import "./App.css";
import Baidumap from "./baidumap";


function App() {
  // 初始化状态管理对象parameters，包含几个环境参数
  const [parameters, setParameters] = useState({
    gasEmission: 100,
    energyGrowth: 100,
    carToElectricRatio: 100,
    materialUsage: 100,
  });


  const handleParameterChange = (name, value) => {
    setParameters(prev => ({ ...prev, [name]: value }));
  };

  // 渲染应用的各个部分<MapDisplay parameters={parameters} />
  return (
    <div className="app-container">
      <div className="data-visualization">
        <DataVisualization parameters={parameters} />
      </div>
      <header class="header">
        <h1>Global Environment Report</h1>
      </header>
      <div class="map-display">
        <img src={require('./world_map.jpg')} height={1080} ></img>
      </div>
      <div className="controls-panel">
        <ControlsPanel parameters={parameters} onParameterChange={handleParameterChange} />
      </div>
      <FooterData parameters={parameters}/>
    </div>
  );
}

// 导出App组件
export default App;