import React from "react";
import { Drawer } from "@material-ui/core";

const Sidebar = props => {
  const { open, toggle } = props;
  return (
    <React.Fragment>
      <Drawer open={open} onClose={toggle}>
        <div tabIndex={0} role="button" onClick={toggle} onKeyDown={toggle}>
          <div style={{ width: 350 }}></div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
