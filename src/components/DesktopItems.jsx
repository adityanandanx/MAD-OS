import React, { useState } from "react";
import AppItem from "./AppItem";

const DesktopItems = ({ openClose, appProps }) => {
  return (
    <div className="desktop-items">
      {appProps.map((app) => {
        return (
          <AppItem
            type="desktop"
            key={app.id}
            label={app.label}
            IconComponent={app.icon}
            onClick={() => {
              openClose(app.id, true);
            }}
          />
        );
      })}
    </div>
  );
};

export default DesktopItems;
