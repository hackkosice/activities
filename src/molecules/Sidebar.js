import React from "react";
import { Drawer, List } from "@material-ui/core";
import ListItem from "./ListItem";

const styles = {
  wrapper: {
    width: 250
  }
};

const links = [
  {
    name: "Domov",
    icon: "home",
    url: "/",
    isEasy: true
  },
  {
    name: "Triedenie",
    icon: "sort",
    url: "/sort",
    isEasy: true
  },
  {
    name: "Uhádni číslo",
    icon: "help",
    url: "/guess",
    isEasy: true
  },
  {
    name: "Šifrovanie",
    icon: "lockopen",
    url: "/crypto",
    isEasy: false
  },
  {
    name: "O nás",
    icon: "info",
    url: "/aboutus",
    isEasy: true
  }
];

const renderList = () => {
  return links
    .filter(x => x.isEasy)
    .map((item, index) => (
      <ListItem
        key={index}
        index={index}
        name={item.name}
        icon={item.icon}
        url={item.url}
      />
    ));
};

const Sidebar = props => {
  const { open, toggle } = props;
  return (
    <React.Fragment>
      <Drawer open={open} onClose={toggle}>
        <div tabIndex={0} role="button" onClick={toggle} onKeyDown={toggle}>
          <div style={styles.wrapper}>
            <List>{renderList()}</List>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
