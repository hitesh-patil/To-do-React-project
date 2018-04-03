import React from 'react';

export default class Header extends React.Component {
	render(){
  	return (
		<header>
			<div className="container">
            <h1>{this.props.title}</h1>
            <p>List down your daily tasks.</p>
			</div>
    	</header>
  	);
	}
}