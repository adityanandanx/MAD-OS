import React, { useState } from "react";
import AppItem from "./AppItem";
import * as apps from "./Apps";

const DesktopItems = ({ openClose }) => {
  return (
    <div className="desktop-items">
      {apps.appsList.map((app) => {
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
