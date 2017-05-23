import React from 'react';

class ProviderList extends React.Component {

	handleCategorySelect(e) {
		this.props.changeCategory(e.target.id, e.target.text);
	}

	render() {

		return(
			    <li><a href="#" id={this.props.singleItem.id} onClick={ this.handleCategorySelect }>{this.props.singleItem.providerName}</a></li>
		)
	}
}

export default ProviderList;