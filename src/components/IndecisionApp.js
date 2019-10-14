import React from 'react';

import AddOption from './AddOption.js';
import Header from './Header.js';
import Options from './Options.js';
import Action from './Action.js';
import OptionsModal from './OptionsModal.js';

export default class IndecisionApp extends React.Component{
   state = {
    options_arr: [],
    selectedOption: undefined
   }

  componentDidMount(){
    try{

      const fetch_option = localStorage.getItem('options');
      const options = JSON.parse(fetch_option);
      if(options){
         this.setState(() => ({ options_arr:options }));
      }
    }
    catch(e){}
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.options_arr.length !== this.state.options_arr.length){
      localStorage.setItem('options',JSON.stringify(this.state.options_arr));
    }

  }
  handleDeleteOptions = () => {
    this.setState(()=>{
      return {
        options_arr: []
      }
    });
  }
  handleDeleteOption = (optionToRemove) =>{
    this.setState((prevState)=>({
      options_arr: prevState.options_arr.filter((option)=>{
        return optionToRemove !== option;
      })
    }));
  }

  handleAddOptions = (option) => {
    if(!option){
      return "please enter valid input";
    }
    else if(this.state.options_arr.indexOf(option) > -1){
      return "Element already exists";
    }
    this.setState((prevState)=>{
      return {
        options_arr: prevState.options_arr.concat(option)
      };
    });
  }
  handlePick = (e) => {
    const mathRandom = Math.floor( Math.random() * this.state.options_arr.length);
    const selectedOption = this.state.options_arr[mathRandom];
    this.setState(()=>({
      selectedOption
    }));
  }

  handleClearModal = ()=>{
    this.setState(()=>({
      selectedOption: undefined
    }));
  }

  render() {
  const title1 = "Indecision App!";

    return (
        <div>
          <Header title={title1}/>
          <div className="container">
            <Action handlePick={this.handlePick} arrayempty={this.state.options_arr.length > 0}/>
            <div className="main-app">
              <Options option = {this.state.options_arr} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
              <AddOption handleAddOptions={this.handleAddOptions}/>
            </div>
          </div>
          <OptionsModal selectedOption={this.state.selectedOption} handleClearModal={this.handleClearModal}/>
        </div>
      );
  }
}