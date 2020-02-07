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
  const { name, icon, url = "", index } = props;
  return (
    <Link to={url} style={styles.text} tabIndex={index}>
      <ListItem button tabIndex={index}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </Link>
  );
};

export default Item;
