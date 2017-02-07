var React = require('react');
var NavLinkComponent = require('./NavLinkComponent');


var ListComponent = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost/food-lst.php'
		}
	},
	getInitialState:function(){
		return {
			list:null,
			classId:0,
			total:0
		}
	},
	getData:function(){
		var _this = this;
		var classID  = this.props.params.classID;
		var page = this.props.params.page || 1;

		$.ajax({
			url:this.props.url,
			data:{
				id:classID,
				page:page
			},
			dataType:'json'
		}).done(function(res){
			var resultList = res.result;
			var total = res.total;

			_this.setState({
				list:resultList,
				classID:classID,
				total:total,
				page:page
			});
		})
	},
	componentWillMount:function(){
		this.getData();
	},

	componentWillReceiveProps:function(nextProps){
		if(this.props.params.page == nextProps.params.page){
			this.getData();
		}

	},
	render:function(){
		var imageStyle = {
			width:'140px',
			height:'140px'
		}

		var lists = this.state.list;
		var pageList = [];
		var pageListContent;
		var rowList = [];

		if(lists){
			var listsLen = lists.length;
			var pageMaxSize = Math.ceil(this.state.total/9);
			//循环行
			for(var i=0; i<Math.ceil(listsLen/3); i++){
				var colList = [];
				//循环列
				for(var j=0; j<3;j++){
					var index = i*3+j;

					if(index<listsLen){
						//构建了一个详情页的url地址内容
						var linkUrl = "/detail/" + this.state.classID +"/" + lists[index].id + "/" + this.state.page;
						colList.push(
							<div key={index} className="col-lg-4">
						          <img className="img-circle" 
						          src={lists[index].img} 
						          alt={lists[index].title}
						          style={imageStyle}/>
						          <h2>{lists[index].title}</h2>
						          <p>{lists[index].description}</p>
						          <p>
						          	<NavLinkComponent to={linkUrl} className="btn btn-default" role="button">查看详情</NavLinkComponent>
						          </p>
							</div>
						)
					}

				} // end for

				rowList.push(
					<div className="row" key={i}>
						{colList}
			     	</div>
				)

			} // end for


			for(var i=1;i<=pageMaxSize;i++){
				var linkUrl = "/list/"+ this.state.classID + "/" + i;

				pageList.push(
					<li key={i}>
						<NavLinkComponent to={linkUrl}>{i}</NavLinkComponent>
					</li>
				)
			}

			pageListContent = (
				<nav><ul className="pagination">{pageList}</ul></nav>
			)


		} // end if


		return (
			 <div className="container marketing">
			     {rowList}
			     {pageListContent}
		    </div>
		)
	}
});

module.exports = ListComponent;