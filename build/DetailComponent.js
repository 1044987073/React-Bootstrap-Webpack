var React = require('react');
var NavLinkComponent = require('./NavLinkComponent');


var DetailComponent = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost/food-det.php'
		}
	},
	getInitialState:function(){
		return {
			detailMsg:null,
			classId:0,
			page:1
		}
	},
	getData:function(){
		var _this = this;
		var classID  = this.props.params.classID;
		var page = this.props.params.page;
		var id = this.props.params.id;

		$.ajax({
			url:this.props.url,
			data:{
				id:id
			},
			dataType:'json'
		}).done(function(res){
			_this.setState({
				detailMsg:res.result,
				classID:classID,
				page:page
			})
		})
	},
	componentWillMount:function(){
		this.getData();
	},
	componentWillReceiveProps:function(nextProps){
		this.getData();
	},
	render:function(){
		var data = this.state.detailMsg;
		var page = this.state.page;
		var detail;

		if(data){
			var linkUrl = "/list/" + this.state.classID + "/" + page;
			detail = (
				<div className="container">
					<div className="starter-template">
						<h1>{data.title}</h1>
						<img src={data.img}/>
						<p className="lead">{data.description}</p>
						<NavLinkComponent to={linkUrl} className="btn btn-primary btn-lg" role="button">返回列表</NavLinkComponent>
					</div>
				</div>
			)
		}

		return (
			 <div className="container marketing">
			   {detail}
		    </div>
		)
	}
});

module.exports = DetailComponent;