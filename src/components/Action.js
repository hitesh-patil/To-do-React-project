import React from 'react';

export default class Action extends React.Component {

  render() {
    return (
      <button className="big-button" onClick={this.props.handlePick} disabled={!this.props.arrayempty}>What should i do ?</button>
    );
  }
}