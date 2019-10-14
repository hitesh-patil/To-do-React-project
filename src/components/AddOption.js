import React from 'react';

export default class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.state = {
      error:undefined
    }
  }
  onSubmitForm(e){
    e.preventDefault();
    let input_val = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(input_val);
    this.setState(()=>{
      return {
        error:"Error in processing form data",
      };
    });
    if(!error){
      e.target.elements.option.value = "";
    }
  }
  render(){
    return(
      <div className="add-option">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitForm}>
          <input type="text" name="option"/>
          <button type="submit" className="button" >Submit</button>
        </form>

      </div>
      );
  }
}