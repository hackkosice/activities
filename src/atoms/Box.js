import React, { useState } from "react";

const styles = {
  box: {
    border: "4px solid white",
    borderRadius: 10,
    width: 300,
    height: 200,
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    cursor: "pointer",
    transition: "all .2s ease-in-out"
  },
  hoveredBox: {
    backgroundColor: "#f90"
  }
};

const Box = props => {
  const { value, onSelect, isSelected: isChecked } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onClick={() => {
        onSelect(value);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHovered || isChecked
          ? { ...styles.box, ...styles.hoveredBox }
          : styles.box
      }
    >
      {value}
    </div>
  );
};

export default Box;
