import React from "react";

const DevicePage = ({ device }) => {
  // You can use the 'device' prop to display specific information about the selected device.
  return (
    <div>
      <h2>Device Page</h2>
      <p>Device Name: {device}</p>
      {/* Add more information about the device here */}
    </div>
  );
};

export default DevicePage;
