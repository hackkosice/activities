import React from "react";
import Logo from "../logo.png";

const styles = {
  wrapper: {
    backgroundColor: "#5e2137",
    height: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "60%"
  }
};

const HomePage = () => {
  return (
    <div style={styles.wrapper}>
      <img src={Logo} alt="logo HK" style={styles.image} />
    </div>
  );
};

export default HomePage;
