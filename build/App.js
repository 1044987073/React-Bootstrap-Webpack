 var React = require('react');
 var ReactDOM = require('react-dom');

 //先要引入路由部分
 var Router = require('react-router').Router;
 var Route = require('react-router').Route;
 var hashHistory = require('react-router').hashHistory;
 
 // 自定义组件
var AppComponent = require('./AppComponent.js');
var ListComponent = require('./ListComponent.js');
var AboutComponent = require('./AboutComponent.js');
var HomeComponent = require('./HomeComponent.js');
var ContactComponent = require('./ContactComponent.js');
var DetailComponent = require('./DetailComponent.js');


var App = React.createClass({
	render:function(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={AppComponent}>
					<Route path="/home" component={HomeComponent}/>
					<Route path="/about" component={AboutComponent}/>
					<Route path="/contact" component={ContactComponent}/>
					<Route path="/list/:classID" component={ListComponent}/>
					<Route path="/list/:classID(/:page)" component={ListComponent}/>
					<Route path="/detail/:classID/:id" component={DetailComponent}/>
					<Route path="/detail/:classID/:id(/:page)" component={DetailComponent}/>
				</Route>
			</Router>
		);
	}
});

ReactDOM.render(<App/>,document.getElementById('app'));
