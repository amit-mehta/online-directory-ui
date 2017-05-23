
var React = require('react');

class ProviderListTable extends React.Component {


	render() {
		var providers = this.props.providersData;
	    var providerNameList = providers.map(function(item, index) {
	      return (
	      			<tr>
	                  <td>{item.providerName}</td>
	                  <td>{item.contact}</td>
	                  <td>{item.reference}</td>
	                </tr>
	      )}.bind(this));
		return(
              <div className="container">

                <table className="table">
                  <thead>
                      <tr>
                      <th>Provider Name</th>
                      <th>Contact</th>
                      <th>Reference</th>
                    </tr>
                  </thead>
                  <tbody>{providerNameList}</tbody>
                </table>
              </div>
		)
	}
}

export default ProviderListTable;