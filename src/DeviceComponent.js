import React, { useState } from "react";
import "./DeviceComponent.css";
import { useHistory } from "react-router-dom";
import ScenarioModal from "./ScenarioModal"; // Import the ScenarioModal component
import HealthDataInput from "./HealthDataInput";

const DeviceComponent = () => {
  const [devices, setDevices] = useState([]);
  const [newDeviceName, setNewDeviceName] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [scenarioModalOpen, setScenarioModalOpen] = useState(false);
  const [newScenarioData, setNewScenarioData] = useState({
    name: "",
    steps: ["", "", "", "", ""],
  });
  const [scenarios, setScenarios] = useState([]);
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
    history.push({
      pathname: `/device/${selectedDevice.name}`,
      search: `?scenario=${selectedScenario}`,
      state: {
        selectedScenarioData: scenarios.find(
          (s) => s.name === selectedScenario
        ),
      },
    });
  };

  const handleCloseModal = () => {
    setSelectedDevice(null);
    setScenarioModalOpen(false);
  };

  const handleAddScenario = () => {
    if (newScenarioData.name.trim() === "") {
      alert("Please enter a valid scenario name.");
      return;
    }

    setSelectedDevice((prevDevice) => {
      const updatedDevices = devices.map((device) => {
        if (device === prevDevice) {
          return { ...device, scenario: newScenarioData };
        }
        return device;
      });
      setDevices(updatedDevices);
      return null;
    });

    setScenarios((prevScenarios) => [...prevScenarios, newScenarioData]);
    setNewScenarioData({ name: "", steps: ["", "", "", "", ""] });
  };

  const handleScenarioNameChange = (e) => {
    setNewScenarioData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };

  const handleStepChange = (index, value) => {
    setNewScenarioData((prevData) => {
      const updatedSteps = [...prevData.steps];
      updatedSteps[index] = value;
      return { ...prevData, steps: updatedSteps };
    });
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
      <div>
        <input
          type="text"
          value={newScenarioData.name}
          onChange={handleScenarioNameChange}
          placeholder="Enter new scenario name"
        />
        {newScenarioData.steps.map((step, index) => (
          <input
            key={index}
            type="text"
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            placeholder={`Enter step ${index + 1}`}
          />
        ))}
        <button onClick={handleAddScenario}>Add Scenario</button>
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
        scenarios={scenarios}
        onSelectScenario={handleScenarioSelect}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default DeviceComponent;
