var React = require('react');

var ServiceList = React.createClass({

	handleCategorySelect: function(e) {
		this.props.changeCategory(e.target.id, e.target.text);
	},
	render: function() {

		return(
			    <li><a href="#" id={this.props.singleItem.id} onClick={ this.handleCategorySelect }>{this.props.singleItem.serviceName}</a></li>
		)
	}
});

module.exports=ServiceList;