import React from "react";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import AppItem from "./AppItem";
import Menu from "./Menu";
import { useState } from "react/cjs/react.development";

const Panel = ({ openClose, appProps }) => {
  let [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="panel">
      <Avatar className="avatar" onClick={openMenu} />
      <span className="panel-sep-primary"></span>
      {appProps.map((app) => {
        return (
          <AppItem
            key={app.id}
            type={"panel"}
            IconComponent={app.icon}
            onClick={() => {
              openClose(app.id, true);
            }}
            open={app.isOpen}
          />
        );
      })}
      <Menu openClose={openClose} open={menuOpen} appProps={appProps} />
    </div>
  );
};

export default Panel;
