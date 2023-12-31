import React from "react";
import "../styles/toolbar.scss";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Cube from "../tools/Cube";

const Toolbar = () => {
  const changeColor = (e) => {
      toolState.setStrokeColor(e.target.value);
      toolState.setFillColor(e.target.value);
  };

  const download = () => {
      const dataUrl = canvasState.canvas.toDataURL();
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = canvasState.sessionId + ".jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  }

  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionId))}
      ></button>
      <button
        className="toolbar__btn rect"
        onClick={() => toolState.setTool(new Cube(canvasState.canvas, canvasState.socket, canvasState.sessionId))}
      ></button>
      <button className="toolbar__btn circle"></button>
      <button className="toolbar__btn erase"></button>
      <button className="toolbar__btn line"></button>
      <input
        onChange={(event) => changeColor(event)}
        style={{ marginLeft: 10, width: 25 }}
        type="color"
      />
      <button className="toolbar__btn undo" onClick={() => canvasState.undo()}></button>
      <button className="toolbar__btn redo" onClick={() => canvasState.redo()}></button>
      <button className="toolbar__btn save" onClick={() => download()}></button>
    </div>
  );
};

export default Toolbar;
