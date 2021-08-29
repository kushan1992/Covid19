import React, { Component,Suspense,lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './store';

import './assets/css/theme.min.css';
const Homepage = lazy(() => import('./components/pages/Homepage'));

const history = createBrowserHistory();

class App extends Component {
 
    render() { 
        return ( 
            <Provider store={store}>
               <Router history={history}>
                  <Suspense fallback={<div className="loading-spinner" />}>
                      <Switch>
                      <Route
                            exact
                            path="/"
                            component={(props) => <Homepage {...props} />}
                        />
                      </Switch>
                  </Suspense>
               </Router>
            </Provider>
         );
    }
}
 
export default App;