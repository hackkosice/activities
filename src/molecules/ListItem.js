import React from "react";
import { ListItem, ListItemIcon, Icon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  text: {
    textDecoration: "none",
    color: "black"
  }
};

const Item = props => {
  const { name, icon, url } = props;
  return (
    <Link to={url} style={styles.text}>
      <ListItem button>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </Link>
  );
};

export default Item;
