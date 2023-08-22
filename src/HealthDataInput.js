import React, { useState } from "react";

const HealthDataInput = () => {
  const [healthData, setHealthData] = useState({
    BPM: 75,
    RESP: 85,
    TEMP: 85,
    SpO2: 75,
    CO2: 75,
    IBP: "120/80",
  });

  const handleInputChange = (field, value) => {
    setHealthData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div>
      <h2>Health Data Input</h2>
      <div>
        <label>BPM:</label>
        <input
          type="number"
          value={healthData.BPM}
          onChange={(e) => handleInputChange("BPM", e.target.value)}
        />
      </div>
      <div>
        <label>RESP:</label>
        <input
          type="number"
          value={healthData.RESP}
          onChange={(e) => handleInputChange("RESP", e.target.value)}
        />
        <label>TEMP:</label>
        <input
          type="number"
          value={healthData.TEMP}
          onChange={(e) => handleInputChange("TEMP", e.target.value)}
        />
      </div>
      <div>
        <label>SpO2:</label>
        <input
          type="number"
          value={healthData.SpO2}
          onChange={(e) => handleInputChange("SpO2", e.target.value)}
        />
        <label>CO2:</label>
        <input
          type="number"
          value={healthData.CO2}
          onChange={(e) => handleInputChange("CO2", e.target.value)}
        />
        <label>IBP(1,2):</label>
        <input
          type="text"
          value={healthData.IBP}
          onChange={(e) => handleInputChange("IBP", e.target.value)}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default HealthDataInput;
