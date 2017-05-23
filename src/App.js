import React from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryList from './CategoryList'
import ServiceList from './ServiceList'
import ProviderList from './ProviderList'
import ProviderListTable from './ProviderListTable'
import $ from 'jquery';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            categoryTitle: 'Select Category',
            serviceTitle: 'Select Service',
            providerTitle: 'Select Provider',

            categoryList: [],
            serviceList: [],
            providerList: []
        };
        this.setCategoryText = this.setCategoryText.bind(this);
        this.setServiceText = this.setServiceText.bind(this);
    }
    componentDidMount() {

        this.serverRequest = $.get('https://online-directory.herokuapp.com/category', function(result) {
          var tempCategories = result;
          console.log(result);
          this.setState({
            categoryList: tempCategories

          }); //setState
        }.bind(this));
    }

    setCategoryText(event) {
        var title = event.target.text;
        this.serverRequest = $.get('https://online-directory.herokuapp.com/category/'+event.target.id, function(result) {
            this.setState({
                categoryTitle: title,
                serviceTitle: 'Select Service',
                serviceList: result.serviceDetails});
        }.bind(this));
    }

    setServiceText(event) {
        var title = event.target.text;
        this.serverRequest = $.get('https://online-directory.herokuapp.com/service/'+event.target.id, function(result) {
        this.setState({
          serviceTitle: title,
          providerList: result.providers
        });
        }.bind(this));
    }

    setProviderText(id, text) {
      this.setState({
        providerTitle: text
      });
    }

    render() {
        var selectedCategory = this.state.categoryTitle;
        var selectedService = this.state.serviceTitle;
        var selectedProvider = this.state.providerTitle;

        var categories = this.state.categoryList;
        var categoryList = categories.map(function(item, index) {
        return (
          <CategoryList singleItem = { item } changeCategory = { this.setCategoryText }/>
        )
        }.bind(this));

        var services =  this.state.serviceList;
        var serviceNameList = services.map(function(item, index) {
        return (
          <ServiceList singleItem = { item } changeCategory = { this.setServiceText }/>
        )
        }.bind(this));

        var providers =  this.state.providerList;
        var providerNameList = providers.map(function(item, index) {
        return (
          <ProviderList singleItem = { item } changeCategory = { this.setProviderText }/>
        )
        }.bind(this));

        var providerListTable = <ProviderListTable providersData = {providers}/>

        return (

          <div className="container">
              <div className="row">
                <div className="col-sm-4 dropdown">
                  <span>Category :</span>
                  <button className="btn btn-default dropdown-toggle" id="dropdownMenu1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {selectedCategory} <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu"> {categoryList} </ul>
                </div>
                <div className="col-sm-4 dropdown">
                  <span>Service :</span>
                  <button className="btn btn-default dropdown-toggle" id="dropdownMenu2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {selectedService} <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu"> {serviceNameList} </ul>
                </div>
              </div>
              <div className="row"> {providerListTable} </div>
          </div>
        );
    }
}

export default App;
