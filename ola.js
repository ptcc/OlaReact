import React from 'react'

module.exports=React.createClass({
	getInitialState:function(){
		return{tempo:0}
	},
	tick: function() {
    	this.setState({tempo: this.state.tempo + 1});
  	},
	componentDidMount: function() {
    	this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render:function(){
		return(
			<div>Olá {this.props.coisa}! {this.state.tempo}</div>
		)
	}	
})

