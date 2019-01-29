import React from 'react';

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} style={{ width: "400px" }} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} style={{ width: "400px" }} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginRight: 150, marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}