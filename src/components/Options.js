import React from 'react';
import Option from './Option.js'

const Options = props => (
    <div>
      <div className="option-header">
        <h3>Your Options</h3>
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
      </div>
    {props.option.length === 0 && <p className="main-app__message">Please add some options.</p>}
      <ul>
        {props.option.map((val,index)=> <Option handleDeleteOption={props.handleDeleteOption} key={val} count={index+1} option={val}/>)}
      </ul>
    </div>
);

export default Options;