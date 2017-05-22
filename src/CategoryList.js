var React = require('react');

var CategoryList = React.createClass({

	handleCategorySelect: function(e) {
		this.props.changeCategory(e.target.id, e.target.text);
	},
	render: function() {

		return(
			    <li><a href="#" id={this.props.singleItem.id} onClick={ this.handleCategorySelect }>{this.props.singleItem.name}</a></li>
		)
	}
});

module.exports=CategoryList;