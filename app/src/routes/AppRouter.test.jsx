import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from './AppRouter';
import AppHistory from '../bootstrap/AppHistory';

describe('AppRouter', () => {
	let wrapper;
	let useEffect;
	beforeEach(() => {
		wrapper = shallow(<AppRouter />);
		useEffect = jest.spyOn(React, 'useEffect');
	});

	it('should AppRouter was created', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('should prop path /login is in Route', () => {
		const routeLogin = wrapper.findWhere(n => n.prop('path') === '/login');
		expect(routeLogin).toBeDefined();
	});

	it('should prop component is in Route and equal LoginRoute', () => {
		const routeLogin = wrapper.findWhere(n => n.prop('path') === '/login');
		expect(routeLogin.prop('component').name).toBe('LoginRoute');
	});

	it('should prop path / is in Route', () => {
		const routeLogin = wrapper.findWhere(n => n.prop('path') === '/');
		expect(routeLogin).toBeDefined();
	});

	it('should prop component is in Route and equal MainRoute', () => {
		const routeLogin = wrapper.findWhere(n => n.prop('path') === '/');
		expect(routeLogin.prop('component').name).toBe('MainRoute');
	});

	it('should check if handlleRouteChange has been called', () => {
		const handleRouteChange = jest.spyOn(AppHistory, 'handleRouteChange');
		useEffect.mock.calls[0][0]();
		expect(useEffect).toHaveBeenCalled();
		expect(handleRouteChange).toHaveBeenCalled();
	});
});
