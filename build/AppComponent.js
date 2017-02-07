var React = require('react');
 var HeaderComponent = require('./HeaderComponent.js');
 var FooterComponent = require('./FooterComponent.js');

 var AppComponent = React.createClass({
 	render:function(){
 		return (
 			<div>
 				<HeaderComponent/>
 					{this.props.children}
 				<FooterComponent/>
 			</div>
 		)
 	}
 });

 module.exports = AppComponent;