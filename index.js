var React=require('react');
var render=require('react-dom').render;
var Ola = require('./ola')
var el=document.createElement('div')
document.body.appendChild(el)
render(<Ola coisa="mundo" />,el)
setTimeout(function(){
	render(<Ola coisa="mundinho" />,el)
},10000)