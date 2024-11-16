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
        <label>Gas Emission</label><span>{parameters.gasEmission}%</span>
        <input type="range" min="0" max="200" value={parameters.gasEmission} onChange={(e) => handleSliderChange(e, 'gasEmission')} />
      </div>
      <div className="control-group">
        <label>Energy Growth</label><span>{parameters.energyGrowth}%</span>
        <input type="range" min="0" max="200" value={parameters.energyGrowth} onChange={(e) => handleSliderChange(e, 'energyGrowth')} />
      </div>
      <div className="control-group">
        <label>Car/Electric Car Ratio</label><span>{parameters.carToElectricRatio}%</span>
        <input type="range" min="0" max="200" value={parameters.carToElectricRatio} onChange={(e) => handleSliderChange(e, 'carToElectricRatio')} />
      </div>
      <div className="control-group">
        <label>Material Usage</label><span>{parameters.materialUsage}%</span>
        <input type="range" min="0" max="200" value={parameters.materialUsage} onChange={(e) => handleSliderChange(e, 'materialUsage')} />
      </div>
    </div>
  );
}

export default ControlsPanel;
