import React from "react";
// import "./ControlsPanel.css"
function ControlsPanel({ parameters, onParameterChange }) {
  const handleSliderChange = (e, name) => {
    onParameterChange(name, parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h3>参数调节(0%~200%)</h3>
      <div className="control-group">
        <label>温室气体排放量</label><span>{parameters.gasEmission}%</span>
        <input type="range" min="0" max="200" value={parameters.gasEmission} onChange={(e) => handleSliderChange(e, 'gasEmission')} />
      </div>
      <div className="control-group">
        <label>能耗</label><span>{parameters.energyGrowth}%</span>
        <input type="range" min="0" max="200" value={parameters.energyGrowth} onChange={(e) => handleSliderChange(e, 'energyGrowth')} />
      </div>
      <div className="control-group">
        <label>电车占车量比例</label><span>{parameters.carToElectricRatio/2}%</span>
        <input type="range" min="0" max="200" value={parameters.carToElectricRatio} onChange={(e) => handleSliderChange(e, 'carToElectricRatio')} />
      </div>
      <div className="control-group">
        <label>材料消耗量</label><span>{parameters.materialUsage}%</span>
        <input type="range" min="0" max="200" value={parameters.materialUsage} onChange={(e) => handleSliderChange(e, 'materialUsage')} />
      </div>
    </div>
  );
}

export default ControlsPanel;
