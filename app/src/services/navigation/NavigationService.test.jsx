import { goToRoute } from './NavigationService';
import { createHashHistory } from 'history';

jest.mock('history');

describe('Navigation', () => {
	it('should check called of history.push ', () => {
		const history = {
			push: jest.fn()
		};
		createHashHistory.mockReturnValue(history);
		goToRoute('home');
		expect(history.push).toHaveBeenCalledTimes(1);
		expect(history.push).toHaveBeenCalledWith('home');
	});
});
