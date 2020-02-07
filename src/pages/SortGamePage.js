import React, { useState, useEffect } from "react";
import Box from "../atoms/Box";

const styles = {
  gamewrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around"
  },
  counter: {
    fontSize: "10rem"
  }
};

const generateRandomNumber = limit => Math.floor(Math.random() * limit);

const generateRandomArray = length => {
  let newArr = [];
  while (newArr.length !== length) {
    while (true) {
      let num = generateRandomNumber(100);
      if (!newArr.includes(num)) {
        newArr = [...newArr, num];
        break;
      }
    }
  }
  return newArr;
};

const SortGamePage = () => {
  const [numberArray, setNumberArray] = useState(generateRandomArray(10));
  const [selected, setSelected] = useState([]);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0] === selected[1]) {
        setSelected([]);
        return;
      }
      const [first, second] = [
        numberArray.indexOf(selected[0]),
        numberArray.indexOf(selected[1])
      ];
      let newArr = [...numberArray];
      newArr[first] = selected[1];
      newArr[second] = selected[0];
      setSelected([]);
      setNumberArray(newArr);
      if (isSolved(newArr)) {
        alert(
          `Super, podarilo sa ti to vyriešiť na ${steps} ${
            steps >= 5
              ? "krokov"
              : steps > 1
              ? "kroky"
              : steps === 1
              ? "krok"
              : "krokov"
          }`
        );
      } else {
        setSteps(steps + 1);
      }
    }
  }, [selected, numberArray, steps]);

  const renderBoxes = arr => {
    if (!arr || !selected) return null;
    return arr.map((value, i) => (
      <Box
        isSelected={selected.includes(value)}
        onSelect={val => setSelected([...selected, val])}
        value={value}
        key={value}
        index={i}
      />
    ));
  };

  const isSolved = arr => {
    return (
      JSON.stringify(arr) === JSON.stringify([...arr].sort((a, b) => a - b))
    );
  };

  return (
    <React.Fragment>
      <div style={styles.gamewrapper}>
        <div style={styles.wrapper}>{renderBoxes(numberArray)}</div>
        <h1 style={styles.counter}>{`${steps} ${
          steps >= 5
            ? "krokov"
            : steps > 1
            ? "kroky"
            : steps === 1
            ? "krok"
            : "krokov"
        }`}</h1>
      </div>
    </React.Fragment>
  );
};

export default SortGamePage;
