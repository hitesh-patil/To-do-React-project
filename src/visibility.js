class Toggle extends React.Component{
	constructor(props){
		super(props);
		// let flag = false;
		console.log(super())
		this.state = {
			flag: false
		}
	}
	toggle(){
    this.setState((preveState) => {
   		return {
   			flag: !preveState.flag
   		};
    });
	}
	render() {
		return (
			<div>
			  <button onClick={this.toggle.bind(this)}>{this.state.flag ? 'hide details':'show details'}</button>
			  <p>{this.state.flag && "this text is hidden"}</p>
			</div>
		);
	}
}

ReactDOM.render(<Toggle/>,document.getElementById("render"));