import React from "react";
import { Drawer, List } from "@material-ui/core";
import ListItem from "./ListItem";

const styles = {
  wrapper: {
    width: 350
  }
};

const links = [
  {
    name: "Example",
    icon: "home",
    url: "/"
  }
];

const renderList = () => {
  return links.map(item => (
    <ListItem name={item.name} icon={item.icon} url={item.url} />
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
