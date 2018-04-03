import React from 'react';

const Option = (props)=>(
      <li>
      <p><span>{props.count}.</span> {props.option}</p>
      <button className="button button--link" onClick= {(e)=>{ props.handleDeleteOption(props.option); }}>remove</button>
      </li>
);
export default Option;