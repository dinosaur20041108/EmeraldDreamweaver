import "leaflet/dist/leaflet.css";
import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import './MapDisplay.css';

function MapDisplay({ parameters }) {
  const cities = [
    { name: '北京', lat: 39.9042, lon: 116.4074, pm25: 34.10 },
    { name: '上海', lat: 31.2304, lon: 121.4737, pm25: 28.70 },
    { name: '广州', lat: 23.1291, lon: 113.2644, pm25: 23.50 },
    { name: '香港', lat: 22.3526, lon: 113.9745, pm25: 15.50 },
    { name: 'New York City', lat: 40.6973, lon: -74.1444, pm25: 11.60 },
    { name: 'London', lat: 51.5074, lon: -0.1278, pm25: 8.40 },
    { name: 'Singapore', lat: 1.3521, lon: 103.8198, pm25: 13.40 },
    { name: 'Abu Dhabi', lat: 24.4539, lon: 54.3773, pm25: 38.2 },
    { name: 'Moscow', lat: 55.7558, lon: 37.6173, pm25: 10.4 },
    { name: 'Paris', lat: 48.8566, lon: 2.3522, pm25: 10.3 },
    { name: 'WashingtonDC', lat: 38.9072, lon: -77.0369, pm25: 11.7 },
    { name: 'Mexico City', lat: 19.4326, lon: -99.1332, pm25: 22.3 },
    { name: 'Ottawa', lat: 45.4215, lon: -75.6972, pm25: 9.7 },
  ];

  const [updatedPm25Values, setUpdatedPm25Values] = useState([]);
  const mapRef = useRef(null);  // Use useRef to store map instance
  const markersRef = useRef([]); 

  function calculateUpdatedPm25(pm25) {
    return pm25 * parameters.gasEmission / 100 * (0.9 + 0.1 * parameters.carToElectricRatio / 100) * parameters.energyGrowth / 100+Math.random()*1-(currentStartYear-2023)/5+10/pm25;
  }
  const [currentStartYear, setCurrentStartYear] = useState(2014);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartYear((prevYear) => (prevYear + 1 > 2040 ? 2014 : prevYear + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const newUpdatedPm25Values = cities.map(city => ({
      name: city.name,
      lat: city.lat,
      lon: city.lon,
      updatedPm25: calculateUpdatedPm25(city.pm25),
    }));

    setUpdatedPm25Values(newUpdatedPm25Values);
  }, [currentStartYear]);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map').setView([39.9, 116.4], 3);

      var bounds = [[-90, -180], [90, 180]];  

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.carto.com/">CARTO</a> contributors',
      }).addTo(map);

      map.setMaxBounds(bounds);
      mapRef.current = map;
    }


    updatedPm25Values.forEach((city, index) => {
      const { name, lat, lon, updatedPm25 } = city;
      
      if (markersRef.current[index]) {
        markersRef.current[index].setLatLng([lat, lon]).setIcon(getMarkerIcon(name, updatedPm25.toFixed(2)));
      } else {
        const marker = L.marker([lat, lon], {
          icon: getMarkerIcon(name, updatedPm25.toFixed(2)),
        }).addTo(mapRef.current);

        marker.bindPopup(`<b>${name}</b><br>PM2.5: ${updatedPm25.toFixed(2)}`);
        markersRef.current[index] = marker;
      }
    });


    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
    };
  }, [updatedPm25Values]);

  function getMarkerIcon(cityName, pm25) {
    let color = 'green';
    if (pm25 >= 50.1) {
      color = '#a06a7b';
    } else if (pm25 >= 35.1) {
      color = '#a070b6';
    } else if (pm25 >= 25.1) {
      color = '#f65e5f';
    } else if (pm25 >= 15.1) {
      color = '#f99049';
    } else if (pm25 >= 10.1) {
      color = '#facf39';
    } else if (pm25 >= 5.1) {
      color = '#9cd84e';
    } else {
      color = '#60accb';
    }

    return L.divIcon({
      className: 'custom-icon',
      html: `<div style="background-color: ${color}; color: white; padding: 5px; border-radius: 50%; font-weight: bold; position: relative; display: flex; align-items: center; justify-content: center; white-space: nowrap; text-overflow: ellipsis;">
        ${pm25}
        <div class="city-label">${cityName}</div>
      </div>`,
      iconSize: [30, 30],
    });
  }

  return <div id="map" style={{ height: '800px', width: '100%' }} />;
}

export default MapDisplay;
