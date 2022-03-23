import React, { useState } from "react";
import "./Modal.css";
const Modal = (prop: { width?: string; height?: string }) => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(false);
  };
  return (
    <>
      {show && (
        <div className="modal">
          <div
            className="innerDiv"
            style={{
              width: prop.width ? prop.width : "800px",
              height: prop.height ? prop.height : "500px",
            }}
          >
            <button className="clostBtn" onClick={handleClick}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
