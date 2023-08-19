import React, { Component } from "react";

class HeartbeatMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ecgBPM: 75,
      RESPvalue: 85,
      TEMPvalue: 85,
      SpO2value: 75,
      CO2Value: 75,
      IBPValue: "120/80",
      isEditing: false, // Flag to track if a value is being edited
      editableValue: "", // Value being edited
      isInitial: true,
      currentStep: 1,
    };
  }
  handleClose = () => {
    this.setState({ isInitial: false });
  };
  handleNext = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }));
  };

  renderStepContent = () => {
    switch (this.state.currentStep) {
      case 1:
        return <div>Step 1 Content</div>;
      case 2:
        return <div>Step 2 Content</div>;
      case 3:
        return <div>Step 3 Content</div>;
      case 4:
        return <div>Step 4 Content</div>;
      case 5:
        return <div>Step 5 Content</div>;
      default:
        return null;
    }
  };

  handleDoubleClick = (valueName, initialValue) => {
    this.setState({
      isEditing: true,
      editableValue: initialValue,
      editableValueName: valueName,
    });
  };

  handleInputChange = (event) => {
    this.setState({ editableValue: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.saveEditedValue();
    }
  };

  saveEditedValue = () => {
    const { editableValueName, editableValue } = this.state;

    // Here you can perform any validation or data processing before updating the state
    // For simplicity, we are directly updating the state with the new value

    this.setState({
      [editableValueName]: editableValue,
      isEditing: false,
      editableValue: "",
      editableValueName: "",
    });
  };

  render() {
    const { id } = this.props.match.params;
    const {
      ecgBPM,
      RESPvalue,
      TEMPvalue,
      SpO2value,
      CO2Value,
      IBPValue,
      isEditing,
      editableValue,
      editableValueName,
    } = this.state;
    console.log(this.props);
    return (
      <>
        <div
          style={{
            display: this.state.isInitial ? "block" : "none",
            position: "absolute",
            backgroundColor: "white",
            height: "500px",
            width: "200px",
            left: "20%",
          }}
        >
          {this.renderStepContent()}
          {this.state.currentStep < 5 ? (
            <button onClick={this.handleNext}>Next</button>
          ) : (
            <button onClick={this.handleClose}>Finish</button>
          )}
        </div>
        <div style={{ backgroundColor: "black" }}>
          <header className="header">
            <div className="container">
              <div className="heading">
                <h1>Sample of Heartbeat Monitor Animation {id}</h1>
                <p>Heartbeat monitor Animation</p>
              </div>
            </div>
          </header>
          <table className="graph-table">
            <tbody>
              <tr>
                <td width="60%" className="no-bottom-border">
                  <section>
                    <div className="iconSVGPulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        viewBox="0 0 5184 3844.17"
                      >
                        <path
                          className="path-pulse"
                          d="M472.68,2183.89h678.94c3.36,0,6.34-2.87,7.41-7.14l40.53-160.91c2.68-10.61,14.23-8.97,15.19,2.16l30.25,352.19c.99,11.57,13.2,12.68,15.35,1.4l51.88-272.25c1.69-8.83,10.4-10.78,14.13-3.15l40.54,82.96c1.45,2.95,3.91,4.74,6.55,4.74h92.41c3.66,0,6.83-3.41,7.63-8.19l76.04-452.87c1.97-11.69,14.66-10.54,15.43,1.39l53.31,824.56c.79,12.22,13.9,13.01,15.49,.93l66.68-504.25c1.55-11.69,14.13-11.48,15.44,.27l14.52,129.22c.58,5.13,3.87,8.93,7.74,8.93h513.59c3.32,0,6.29-2.81,7.39-7l45.1-171.76c2.66-10.09,13.55-9.01,15.07,1.49l51.17,354.1c1.62,11.17,13.47,11.39,15.32,.29l49.66-298.57c1.71-10.3,12.41-11.15,15.02-1.19l30.26,115.63c1.1,4.2,4.06,7.02,7.39,7.02h125.72c3.82,0,7.07-3.7,7.71-8.75l45.45-361.07c1.51-11.95,14.4-11.53,15.48,.5l58.23,649.83c1.04,11.64,13.38,12.56,15.38,1.14l83.84-478.87c1.95-11.17,13.94-10.63,15.33,.69l35.02,283.79c1.23,9.97,11.25,12.07,14.68,3.06l32.28-84.6c1.34-3.51,4.03-5.71,6.97-5.71h425.48c3.55,0,6.65-3.21,7.56-7.81l29.65-150.4c2.09-10.62,13.42-10.33,15.2,.4l65.6,394.9c1.81,10.86,13.32,10.99,15.25,.16l72.68-407.51c1.94-10.92,13.61-10.65,15.27,.35l40.26,266.12c1.6,10.56,12.61,11.41,15.11,1.16l21.96-90.15c1.05-4.32,4.05-7.24,7.44-7.24h133.92c3.78,0,7.01-3.61,7.7-8.59l58.47-424.26c1.66-11.99,14.66-11.19,15.49,.95l51.88,760.5c.82,11.97,13.57,12.99,15.44,1.23l78.72-493.98c1.74-10.95,13.34-11.12,15.26-.23l27.61,156.3c.84,4.73,3.99,8.08,7.61,8.08h550.56"
                          style={{
                            fill: "none",
                            stroke: "#fff",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "29px",
                          }}
                        ></path>
                        {/* SVG path code */}
                      </svg>
                    </div>
                  </section>
                </td>
                <td colSpan="2">
                  {isEditing && editableValueName === "ecgBPM" ? (
                    <input
                      type="number"
                      value={editableValue}
                      onChange={this.handleInputChange}
                      onKeyPress={this.handleKeyPress}
                      onBlur={this.saveEditedValue}
                      autoFocus
                    />
                  ) : (
                    <span
                      className="bpm-value"
                      onDoubleClick={() =>
                        this.handleDoubleClick("ecgBPM", ecgBPM)
                      }
                    >
                      BPM: {ecgBPM}
                    </span>
                  )}
                </td>
              </tr>
              <tr>
                {/* Repeat for other rows */}
                <td width="80%" className="no-top-border no-bottom-border">
                  <section>
                    <div className="iconSVGPulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        viewBox="0 0 5184 3844.17"
                      >
                        {/* SVG path code */}
                      </svg>
                    </div>
                  </section>
                </td>
                <td width="10%">
                  {isEditing && editableValueName === "RESPvalue" ? (
                    <input
                      type="number"
                      value={editableValue}
                      onChange={this.handleInputChange}
                      onKeyPress={this.handleKeyPress}
                      onBlur={this.saveEditedValue}
                      autoFocus
                    />
                  ) : (
                    <span
                      className="bpm-value"
                      onDoubleClick={() =>
                        this.handleDoubleClick("RESPvalue", RESPvalue)
                      }
                    >
                      RESP: {RESPvalue}
                    </span>
                  )}
                </td>
                <td width="10%">
                  <span className="temp-value">TEMP: {TEMPvalue}</span>
                </td>
              </tr>
              {/* Repeat for other rows */}
              <tr>
                <td className="no-top-border no-bottom-border">
                  <section>
                    <div className="iconSVGPulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        viewBox="0 0 5184 3844.17"
                      >
                        {/* SVG path code */}
                      </svg>
                    </div>
                  </section>
                </td>
                <td className="no-right-border">
                  <span className="sp-value">SpO2: {SpO2value}</span>
                </td>
                <td className="no-left-border"></td>
              </tr>
              {/* Repeat for other rows */}
              <tr>
                <td className="no-top-border no-bottom-border">
                  <section>
                    <div className="iconSVGPulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        viewBox="0 0 5184 3844.17"
                      >
                        {/* SVG path code */}
                      </svg>
                    </div>
                  </section>
                </td>
                <td className="no-right-border">
                  <span className="c2-value">CO2: {CO2Value}</span>
                </td>
                <td className="no-left-border"></td>
              </tr>
              {/* Repeat for other rows */}
              <tr>
                <td className="no-top-border no-bottom-border">
                  <section>
                    <div className="iconSVGPulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        viewBox="0 0 5184 3844.17"
                      >
                        {/* SVG path code */}
                      </svg>
                    </div>
                  </section>
                </td>
                <td className="no-right-border">
                  <span className="ib-value">IBP(1,2): {IBPValue}</span>
                </td>
                <td className="no-left-border"></td>
              </tr>
              {/* Repeat for other rows */}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default HeartbeatMonitor;
