import * as AuthService from './AuthService';

describe('AuthService', () => {
	describe('login', () => {
		it('should pass email and return router /login?email=email', () => {
			const assignMock = jest.fn();
			Object.defineProperty(window, 'location', {
				value: {
					assign: assignMock
				}
			});
			AuthService.login('email');
			expect(assignMock).toHaveBeenCalledWith('/login?email=email');
			expect(assignMock).toHaveBeenCalledTimes(1);
		});
	});
	describe('isAuthenticated', () => {
		it('should check localStorage and return false and check called of localStorage.getItem', () => {
			mockLocalStorage(null);
			expect(AuthService.isAuthenticated()).toBe(false);
			expect(localStorage.getItem).toHaveBeenCalledWith('system-admin-auth');
		});

		it('should check local Storage, insert in local storage value valid and return true and check called of localStorage.getItem', () => {
			mockLocalStorage('validate');
			expect(AuthService.isAuthenticated()).toBe(true);
			expect(localStorage.getItem).toHaveBeenCalledWith('system-admin-auth');
		});
	});
});

function mockLocalStorage(returnValue) {
	Object.defineProperty(window, 'localStorage', {
		value: {
			getItem: jest.fn(() => returnValue)
		},
		writable: true
	});
}
