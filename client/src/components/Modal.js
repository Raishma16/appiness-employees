// A reusable modal component that displays a modal with the content sent as props from the parent component.
// body and onDismiss props are always required while title and actions are optional.

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
        <div className="content">{props.body}</div>
        {props.actions ? <div className="actions">{props.actions}</div> : null}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
