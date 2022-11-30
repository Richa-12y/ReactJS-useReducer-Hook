import React, { useState } from "react";

const Slider = ({ onchange, min, max }) => {
  const [value, setvalue] = useState(1);

  return (
    <div>
      <div className="slide">
        {value}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => {
            const value = Number(e.target.value);
            onchange(value);
            setvalue(value);
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
