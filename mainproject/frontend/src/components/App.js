import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './register/Dashboard';
import Alert from './layout/Alert';

import Register from './accounts/register';
import Login from './accounts/Login';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

const alertOptions = {
	timeout: 3000,
	position: 'top center'
}

class App extends Component {
	componentDidMount() {
	 store.dispatch(loadUser());
 	}

  render() {
    return (
      <Provider store={store}>
			<AlertProvider template={AlertTemplate}
			{...alertOptions}>
					<Router>
          <Fragment>
            <Header />
						<Alert />
              <Switch>
								<PrivateRoute  exact path="/" component={Dashboard} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
							</Switch>
          </Fragment>
					</Router>
			</AlertProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
