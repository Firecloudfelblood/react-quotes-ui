import React, { Component } from 'react';
import './App.css';
import Search from './search';
import Table from './table'
import 'tachyons'

class App extends Component {
    constructor(){
    super()
    this.state = {
        response: [{quoteNumber:"00", quoteReqType:"00", quoteCreatedDt:"00", quoteExpiryDt:"00"}],
        search: ''
    };
}
  onSearchChange = (event) => {
            this.setState({search: event.target.value});

  }

  componentDidMount(){
    this.callApi()
        .then(res => this.setState({response: res.express.query}))
        .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await  fetch('/table');
    const body = await response.json();
    if(response.status !== 200)throw Error(body.message);

    return body;
  }

  render() {

         const filterQuotes = this.state.response.filter(quotes => {
              return quotes.quoteNumber? quotes.quoteNumber.toLowerCase()
                  .includes(this.state.search.toLowerCase()):''
          });

    return (
      <div className = 'pa3'>
          <div className = "App h-25">
                <Search searchChange={this.onSearchChange}/>

          </div>
        <div>
            <Table quotes={filterQuotes}/>
        </div>

      </div>
    );
  }
}

export default App;
