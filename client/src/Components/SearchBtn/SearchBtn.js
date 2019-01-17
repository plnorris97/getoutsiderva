import React from "react";
// import "./style.css";

function SearchBtn(props) {
    return(
    <button {...props} className="btn btn-success">
        {props.children}
    </button>
    );
}

export default SearchBtn;