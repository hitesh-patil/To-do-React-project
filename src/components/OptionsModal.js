import React from 'react';
import Modal from 'react-modal';

const OptionsModal = (props) => (
  	<Modal
		  isOpen={!!props.selectedOption}
		  contentLabel="Selected Option"
		  onRequestClose={props.handleClearModal}
		  closeTimeoutMS={200}
		  className="modal"
	  >
	  	<h1>Selected option</h1>
	  	{props.selectedOption && <p>{props.selectedOption}</p>}
		<button className="button modal--button" onClick={props.handleClearModal}>Okay</button>
  	</Modal>
);

export default OptionsModal;