import React, { useState, useEffect, useRef } from "react";


  
  
function FooterData({ parameters }) {
    const [oceanLevel, setOceanLevel] = useState(0);
    const [averageTemperature, setAverageTemperature] = useState(0);
    const [currentYearIndex, setCurrentYearIndex] = useState(0);
    const temperature_data = [1.054352439, 1.081996418, 1.109950733, 1.138215382, 1.166790366, 1.195675685, 1.224871339, 1.254377328, 1.284193651, 1.314320309, 1.344757303, 1.37550463, 1.406562293, 1.437930291, 1.469608623, 1.50159729, 1.533896293, 1.566505629, 1.599425301, 1.632655308, 1.666195649, 1.700046325, 1.734207336, 1.768678682, 1.803460363, 1.838552378, 1.873954729];
    const oceanLevel_data = [240, 244, 248, 252, 256, 260, 264, 268, 272, 276, 280, 284, 288, 292, 296, 300, 304, 308, 312, 316, 320, 324, 328, 332, 336, 340, 344];

    useEffect(() => {
        const interval = setInterval(() => {
            const newOceanLevel = oceanLevel_data[currentYearIndex] * parameters.gasEmission / 100 * (0.9 + parameters.carToElectricRatio / 100 * 0.1) * parameters.energyGrowth / 100;
            setCurrentYearIndex((prevIndex) => (prevIndex + 1) % temperature_data.length);
            setOceanLevel(newOceanLevel);

            const newAverageTemperature = temperature_data[currentYearIndex] * parameters.gasEmission / 100 * (0.9 + parameters.carToElectricRatio / 100 * 0.1) * parameters.energyGrowth / 100;
            setAverageTemperature(newAverageTemperature);
        }, 500);

        return () => clearInterval(interval);
    }, [currentYearIndex]);


    const oceanLevelClass = oceanLevel > 320 ? 'high' : oceanLevel > 280 ? 'medium' : 'low';
    const temperatureClass = averageTemperature > 1.5 ? 'high' : averageTemperature > 1.2 ? 'medium' : 'low';

    return (
        <footer className="footer-info">
            <div className={`ocean-level ${oceanLevelClass}`}>+{oceanLevel.toFixed(2)} mm Ocean Level</div>
            <div className={`temperature ${temperatureClass}`}>+{averageTemperature.toFixed(2)}°C average temperature</div>
        </footer>
    );
}

export default FooterData;
