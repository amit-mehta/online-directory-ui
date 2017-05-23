import React from 'react';

export default class CategoryList extends React.Component{

    constructor(props){
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(e) {
        this.props.changeCategory(e);
    }

	render() {
		return(
			    <li><a href="#" id={this.props.singleItem.id} onClick={ this.onSelect }>{this.props.singleItem.name}</a></li>
		)
	}
};