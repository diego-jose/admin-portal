import { createHashHistory, Action, Location } from 'history';
import * as AuthService from '../services/auth/AuthService';

const hashHistory = createHashHistory();

function handleRouteChange(currentLocation: Location): void {
	const isAuthenticated = AuthService.isAuthenticated();
	if (currentLocation.pathname !== '/login' && !isAuthenticated) {
		hashHistory.push('/login');
	} else if (currentLocation.pathname === '/login' && isAuthenticated) {
		hashHistory.push('/');
	}
}

hashHistory.listen((location: Location, action: Action) => handleRouteChange(location));

export default Object.assign({}, hashHistory, {
	handleRouteChange
});
