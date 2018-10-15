import React from 'react';
import  {Route, Switch} from 'react-router-dom';
import App from './App';
import QuoteDetails from './quoteDetails';

const Routes = () =>{
    return(
            <Switch path    = '/'             component = {App}>
                <Route path = '/quoteDetails' component = {QuoteDetails} />
                <Route path = '/'             component = {App} />
            </Switch>
        )

}

export default Routes;