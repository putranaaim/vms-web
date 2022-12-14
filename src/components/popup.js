import React from "react";
import "./popup.css";

const Popup = (props) => {
  return (
    <div className="popup-area">
      <div className="popup-box">
        <div className="pop-header">
          {props.title}
          <i
            class="fa fa-times"
            aria-hidden="true"
            onClick={props.handleClose}
          ></i>
        </div>
        <div className="pop-item">{props.content}</div>
      </div>
    </div>
  );
};

export default Popup;
