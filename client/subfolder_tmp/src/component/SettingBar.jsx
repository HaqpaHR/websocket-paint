import React from "react";
import "../styles/toolbar.scss";
import toolState from "../store/toolState";

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label htmlFor="line-width">Толщина линии</label>
      <input
        onChange={(event) => toolState.setLineWidth(event.target.value)}
        style={{ margin: "0 10px" }}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label htmlFor="stroke-color">Цвет границы</label>
      <input
        onChange={(event) => toolState.setStrokeColor(event.target.value)}
        style={{ margin: "0 10px" }}
        id="stroke-color"
        type="color"
      />
    </div>
  );
};

export default SettingBar;
