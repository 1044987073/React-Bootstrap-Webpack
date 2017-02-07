var React = require('react');
var NavLinkComponent = require('./NavLinkComponent');


var HeaderComponent = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost/food-cate.php'
		}
	},
	getInitialState:function(){
		return {
			category:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({
			url:this.props.url,
			dataType:'json'
		}).done(function(res){
			var resultCategory = res.result;
			_this.setState({
				category:resultCategory
			})
		})
	},
	render:function(){

		var cates = [];
		var categories = this.state.category;

		if(categories){
			var catesLen = categories.length;

			for (var i = 0; i < catesLen; i++) {
				cates.push(
					  <li key={i}>
					  	<NavLinkComponent to={"/list/" + categories[i].id}>{categories[i].name}</NavLinkComponent>
					  </li>
				)
			};
		}

		return (
			<div className="navbar-wrapper">
				<div className="container">
			        <nav className="navbar navbar-inverse navbar-static-top">
			          <div className="container">
			            <div className="navbar-header">
			              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			                <span className="sr-only">Toggle navigation</span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			              </button>
			              <a className="navbar-brand" href="#">Project name</a>
			            </div>
			            <div id="navbar" className="navbar-collapse collapse">
			              <ul className="nav navbar-nav">
			                <li><NavLinkComponent to="/home">首页</NavLinkComponent></li>
			                <li><NavLinkComponent to="/about">关于我们</NavLinkComponent></li>
			                <li><NavLinkComponent to="/contact">联系我们</NavLinkComponent></li>
			                <li className="dropdown">
			                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">健康知识 <span className="caret"></span></a>
			                  <ul className="dropdown-menu">
			                  	{cates}
			                  </ul>
			                </li>
			              </ul>
			            </div>
			          </div>
			        </nav>

			      </div>
		    </div>
		)
	}
});

module.exports = HeaderComponent;