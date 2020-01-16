import AppHistory from './AppHistory';
import * as AuthService from '../services/auth/AuthService';

jest.mock('history', () => ({
	createHashHistory: () => ({
		listen: jest.fn(),
		push: jest.fn()
	})
}));

describe('AppHistory', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should check the callback history is redirect to main page', () => {
		AuthService.isAuthenticated = jest.fn().mockReturnValue(true);
		AppHistory.handleRouteChange({ pathname: '/login' });
		expect(AppHistory.push).toHaveBeenCalledWith('/');
	});

	it('should check the callback history is redirect to login', () => {
		AuthService.isAuthenticated = jest.fn().mockReturnValue(false);
		AppHistory.handleRouteChange({ pathname: '/' });
		expect(AppHistory.push).toHaveBeenCalledWith('/login');
	});

	it('should check the callback history is redirect to main page when pathName is /login and is Auth', () => {
		AuthService.isAuthenticated = jest.fn().mockReturnValue(true);
		AppHistory.handleRouteChange({ pathname: '/login' });
		expect(AppHistory.push).toHaveBeenCalledWith('/');
	});

	it('should check the callback history is redirect to any page', () => {
		AuthService.isAuthenticated = jest.fn().mockReturnValue(true);
		AppHistory.handleRouteChange({ pathname: '/' });
		expect(AppHistory.push).toBeCalledTimes(0);
	});
});
