import React, { useState } from "react";
import AppItem from "./AppItem";
import * as apps from "./Apps";

const DesktopItems = () => {
  return (
    <div className="desktop-items">
      {apps.appsList.map((icon) => {
        return (
          <AppItem
            type="desktop"
            key={icon.id}
            label={icon.label}
            IconComponent={icon.icon}
          />
        );
      })}
    </div>
  );
};

export default DesktopItems;
