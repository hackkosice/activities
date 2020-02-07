import React from "react";
import Logo from "../logo.png";
import QR from "../qr.png";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "60%"
  },
  qr: {
    width: "20%"
  },
  header: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: ".2rem"
  }
};

const HomePage = () => {
  return (
    <div style={styles.wrapper}>
      <img src={Logo} alt="logo HK" style={styles.image} />
      <img src={QR} alt="Apply HK" style={styles.qr} />
      <h1 style={styles.header}>apply.hackkosice.com</h1>
    </div>
  );
};

export default HomePage;
