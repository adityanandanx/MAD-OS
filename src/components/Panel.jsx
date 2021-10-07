import React from "react";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import AppItem from "./AppItem";
import Menu from "./Menu";
import * as apps from "./Apps";
import { useState } from "react/cjs/react.development";

const Panel = () => {
  let [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="panel">
      <Avatar className="avatar" onClick={openMenu} />
      <span className="panel-sep-primary"></span>
      {apps.appsList.map((app) => {
        return <AppItem type="panel" IconComponent={app.icon} />;
      })}
      <Menu open={menuOpen} />
    </div>
  );
};

export default Panel;
