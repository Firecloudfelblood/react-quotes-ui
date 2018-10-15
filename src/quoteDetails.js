import React, {Component} from 'react'
import Items from './items'

class QuoteDetails extends Component{

    constructor(){
        super();
        this.state = {
            response: []
        };
    }


    componentDidMount(){
        this.callApi()
            .then(res => this.setState({response: res.express.query}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        let quotenumber=this.props.location.search.split('=');
        console.log(quotenumber[1]);
        const response = await  fetch(`/quoteDetails?quoteNumber=${quotenumber[1]}`);
        const body = await response.json();
        if(response.status !== 200)throw Error(body.message);

        return body;
    }

    render(){
        var  currQuote=this.state.response;
        return(
          <div>
              <div>{

                  currQuote.map((user, index) => {
                  return(
                      <div>
                          <div className='center flex flex-wrap  bg-white dib br3 pa3 ma2  bw2 shadow-5 w-80'>
                              <div className='w-50'>
                                  <p >
                                      <div className='dib b w-50'>Account Number:</div>
                                      <div className='dib w-50'> {currQuote[0].accountName?currQuote[0].accountName:'0000000000'}</div>
                                  </p>
                                  <p >
                                      <text className='dib b w-50'>Quote Number: </text>
                                      <text className='dib w50'>{currQuote[0].quoteNumber}</text>
                                      </p>
                                  <p>
                                      <text className='dib b w-50'>Created By:</text>
                                      <text className='dib w50'>{currQuote[0].company}</text>
                                      </p>
                                  <p>
                                      <text className='dib b w-50'>Created On:</text>
                                      <text className='dib w50'>{currQuote[0].quoteCreatedDt}</text>
                                      </p>
                                  <p>
                                      <text className='dib b w-50'>Valid Through:</text>
                                      <text cclassName='dib w50'>{currQuote[0].quoteExpiryDt}</text>
                                      </p>
                                  <p>
                                      <text className='dib b w-50'>Custumer Name:</text>
                                      <text className='dib w-50'> {currQuote[0].custName}</text>
                                      </p>
                                  <p>
                                      <text className='dib b w-50'>Customer Email:</text>
                                      <a className='dib w-50' href='#'>{currQuote[0].custEmail}</a>
                                  </p>
                              </div>
                              <div className='w-50 '>
                                  <p>
                                      <text className='dib b w-50'>Quote Type: </text>
                                      <text className='dib w-50'>{currQuote[0].quoteType}</text>
                                      </p>
                                  <p>
                                      <text className='dib b w-50'>Payment Terms: </text>
                                      <text className='dib w-50'>{currQuote[0].salesRep}</text>
                                      </p>
                                  <p>
                                      <text className='dib b w-50'>Transportation Terms</text>
                                      <text className='dib w-50'>{currQuote[0].transTermDesc}</text>
                                      </p>
                              </div>

                          </div>
                          <div className='flex flex-wrap center w-90 pl3'>
                              <div className=' bg-white dib br3 pa3 pl4 mt2 mb2 ml5 bw2 shadow-5 mr3 w-40'>
                                  <h3>Shipping Address</h3>
                                  <p>{currQuote[0].shipTo.addressLine2}</p>
                                  <p>{currQuote[0].shipTo.addressLine3}</p>
                                  <p>{currQuote[0].shipTo.city}</p>
                                  <p>{currQuote[0].shipTo.state}</p>
                                  <p>{currQuote[0].shipTo.country}</p>
                              </div>
                              <div className=' bg-white dib br3 pa3 pl4 mt2 mb2 ml6 shadow-5  w-40'>
                                  <h3>Billing Address</h3>
                                  <p>{currQuote[0].shipTo.addressLine2}</p>
                                  <p>{currQuote[0].shipTo.addressLine3}</p>
                                  <p>{currQuote[0].shipTo.city}</p>
                                  <p>{currQuote[0].shipTo.state}</p>
                                  <p>{currQuote[0].shipTo.country}</p>
                              </div>
                          </div>
                          <div className = 'w-80 center'>
                            <Items items={currQuote[0].lineItemList.lineItems}/>
                          </div>
                      </div>
                  )
              })

                }
              </div>
          </div>
        );
    }

}

export default QuoteDetails;