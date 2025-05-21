import React from "react";

const STATUS = ({ value, setValue, buttonTitle, sensor, color }) => {
    return (
      <div style={{ flex: 0.5, border: `2px ${color} solid` }}>
        <button onClick={() => setValue(!value)}>{buttonTitle}</button>
        <h1>
          {sensor} {value ? "on" : "off"}
        </h1>
      </div>
    );
  };
  
  export default STATUS;