import React from "react";
import Search from "../../Pages/AdvancedSearch";

// This file exports the Input, TextArea, and FormBtn components
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSelSubmit = this.handleSelectorSubmit.bind(this);
        this.handleChkSubmit = this.handleCheckedSubmit.bind(this);
      }

}


export function DropDown(props) {
 return (
   <div className="form-group">
     <textarea className="form-control" {...props} />
   </div>
 );
}

export function FormBtn(props) {
 return (
   <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
     {props.children}
   </button>
 );
}

export default SearchForm