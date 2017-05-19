var React = require('react');
var ReactDOM = require('react-dom');

var CategoryList = require('./CategoryList');
var ServiceList = require('./ServiceList');
var ProviderList = require('./ProviderList');
var ProviderListTable = require('./ProviderListTable');

var MainInterface = React.createClass({

  getInitialState: function() {
    return {
      categoryTitle: 'Select Category',
      serviceTitle: 'Select Service',
      providerTitle: 'Select Provider',

      categoryList: [],
      serviceList: [],
      providerList: []
    } //return
  }, //g

componentDidMount: function() {

    this.serverRequest = $.get('https://online-directory.herokuapp.com/category', function(result) {
      var tempCategories = result;
      this.setState({
        categoryList: tempCategories
        
      }); //setState
    }.bind(this));
  }, //componentDidMount

  setCategoryText: function(id,text) {

    this.serverRequest = $.get('https://online-directory.herokuapp.com/category/'+id, function(result) {
      this.setState({
        categoryTitle: text,
        serviceTitle: 'Select Service',
        serviceList: result.serviceDetails
      }); //setState
    }.bind(this));
  },

  setServiceText: function(id, text) {
      this.serverRequest = $.get('https://online-directory.herokuapp.com/service/'+id, function(result) {
        this.setState({
          serviceTitle: text,
          providerList: result.providers
        });
      }.bind(this));


  },

  setProviderText: function(id, text) {
      this.setState({
        providerTitle: text
      });
  },

  render: function() {
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

    var selectedCategory = this.state.categoryTitle;
    var selectedService = this.state.serviceTitle;
    var selectedProvider = this.state.providerTitle;
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
            Service :<button className="btn btn-default dropdown-toggle" id="dropdownMenu2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              {selectedService} <span className="caret"></span>
            </button>
            <ul className="dropdown-menu"> {serviceNameList} </ul>
          </div>
        </div>

        <div className="row"> {providerListTable} </div>
      </div>
    )
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('categories')
); //render
