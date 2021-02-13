import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <i className="close icon" onClick={props.onDismiss}></i>
        {props.title ? <div className="header">{props.title}</div> : null}
        <div className="content">{props.content}</div>
        {props.actions ? <div className="actions">{props.actions}</div> : null}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
