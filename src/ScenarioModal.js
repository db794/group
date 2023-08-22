import React from "react";
import PropTypes from "prop-types";

const ScenarioModal = ({ isOpen, scenarios, onSelectScenario, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Select Scenario</h3>
        <ul>
          {scenarios.map((scenario, index) => (
            <li key={index} onClick={() => onSelectScenario(scenario.name)}>
              {scenario.name}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

ScenarioModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  scenarios: PropTypes.array.isRequired,
  onSelectScenario: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ScenarioModal;
