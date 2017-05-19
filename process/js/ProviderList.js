var React = require('react');

var ProviderList = React.createClass({

	handleCategorySelect: function(e) {
		this.props.changeCategory(e.target.id, e.target.text);
	},
	render: function() {

		return(
			    <li><a href="#" id={this.props.singleItem.id} onClick={ this.handleCategorySelect }>{this.props.singleItem.providerName}</a></li>
		)
	}
});

module.exports=ProviderList;