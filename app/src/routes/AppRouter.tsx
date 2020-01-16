import React from 'react';
import { Route, Router } from 'react-router';
import AppHistory from '../bootstrap/AppHistory';
import MainRoute from './main/MainRoute';
import LoginRoute from './login/LoginRoute';

function AppRouter() {
	React.useEffect(() => {
		AppHistory.handleRouteChange(AppHistory.location);
	}, []);

	return (
		<Router history={AppHistory}>
			<Route exact path="/" component={MainRoute} />
			<Route path="/login" component={LoginRoute} />
		</Router>
	);
}
export default AppRouter;
