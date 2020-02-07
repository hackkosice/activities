import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";

const getRandomNumber = () => Math.floor(Math.random() * 20) - 10;

const level1a = getRandomNumber();
const level1b = getRandomNumber();
const level1c = getRandomNumber();

const level2a = getRandomNumber();
const level2b = getRandomNumber();
const level2c = getRandomNumber();
const level2d = getRandomNumber();

const level3a = getRandomNumber();
const level3b = getRandomNumber();
const level3c = getRandomNumber();

const levels = [
  {
    formula: x => level1a * x - level1b,
    correct: level1c
  },
  {
    formula: x => level2a * x ** 2 + level2b * x + level2c,
    correct: level2d
  },
  {
    formula: x => -(x ** 3) + level3a * x - level3b,
    correct: level3c
  }
];

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: "6rem"
  },
  input: {
    fontSize: "3rem",
    textAlign: "center"
  },
  table: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "40%"
  },
  row: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  text: {
    fontSize: "1.5rem",
    textAlign: "center",
    width: "100%"
  }
};

const GuessGamePage = () => {
  const ref = useRef(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [tips, setTips] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const { formula, correct } = levels[currentLevel];
    console.log(correct);
    setAnswer(formula(correct));
  }, [currentLevel]);

  useEffect(() => {
    if (ref) ref.current.focus();
  }, [ref]);

  const checkAnswer = e => {
    e.preventDefault();
    const { correct } = levels[currentLevel];
    let { value } = e.target.children[0];
    if (tips.includes(value)) {
      alert("Toto číslo si už raz zadal");
      e.target.children[0].value = "";
      return;
    }
    if (value === "") {
      alert("Zadaj číslo");
      return;
    }

    setTips([...tips, value]);
    console.log(`${value} <-> ${correct}`);
    if (parseInt(value) === correct) {
      if (currentLevel !== 2) {
        alert("Správne, si super");
        setTips([]);
        setCurrentLevel(currentLevel + 1);
      } else {
        alert("Správne, prešiel si úspešne všetkými levelmi");
        setIsComplete(true);
      }
    }
    e.target.children[0].value = "";
  };

  const renderTips = () => {
    return tips.map((value, index) => (
      <li key={index} style={styles.row}>
        <p style={styles.text}>{index + 1}</p>
        <p style={styles.text}>{value}</p>
        <p style={styles.text}>{levels[currentLevel].formula(value)}</p>
      </li>
    ));
  };

  return (
    <React.Fragment>
      <div style={styles.wrapper}>
        {isComplete && <Redirect to="/" />}
        <h1 style={styles.header}>Výsledok je {answer}</h1>
        <form action="" onSubmit={checkAnswer}>
          <input
            ref={ref}
            style={styles.input}
            type="number"
            step="1"
            placeholder="Tu zadajte váš tip"
          />
        </form>
        <ul style={styles.table}>
          {renderTips()}
          <li style={{ ...styles.row, justifySelf: "flex-end" }}>
            <p style={styles.text}>#</p>
            <p style={styles.text}>Tip</p>
            <p style={styles.text}>Výsledok</p>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default GuessGamePage;
