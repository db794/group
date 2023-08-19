import React, { useState } from "react";
import "./DeviceComponent.css";
import { useHistory } from "react-router-dom";
import ScenarioModal from "./ScenarioModal"; // Import the ScenarioModal component

const DeviceComponent = () => {
  const [devices, setDevices] = useState([]);
  const [newDeviceName, setNewDeviceName] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null); // Track selected device
  const [scenarioModalOpen, setScenarioModalOpen] = useState(false); // Track modal state
  const history = useHistory();

  const handleAddDevice = () => {
    if (newDeviceName.trim() === "") {
      alert("Please enter a valid device name.");
      return;
    }

    setDevices([...devices, { name: newDeviceName, scenario: null }]);
    setNewDeviceName("");
  };

  const handleRemoveDevice = (index) => {
    const updatedDevices = [...devices];
    updatedDevices.splice(index, 1);
    setDevices(updatedDevices);
  };

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
    setScenarioModalOpen(true);
  };

  const handleScenarioSelect = (selectedScenario) => {
    history.push(`/device/${selectedDevice}?scenario=${selectedScenario}`);
  };

  const handleCloseModal = () => {
    setSelectedDevice(null);
    setScenarioModalOpen(false);
  };

  return (
    <div>
      <h2>Device Component</h2>
      <div>
        <input
          type="text"
          value={newDeviceName}
          onChange={(e) => setNewDeviceName(e.target.value)}
          placeholder="Enter device name"
        />
        <button onClick={handleAddDevice}>Add Device</button>
      </div>
      <ul>
        {devices.map((device, index) => (
          <li key={index}>
            <div onClick={() => handleDeviceClick(device)}>{device.name}</div>
            <button
              onClick={() => handleRemoveDevice(index)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <ScenarioModal
        isOpen={scenarioModalOpen}
        scenarios={[
          "Scenario 1",
          "Scenario 2",
          "Scenario 3",
          "Scenario 4",
          "Scenario 5",
        ]}
        onSelectScenario={handleScenarioSelect}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default DeviceComponent;
