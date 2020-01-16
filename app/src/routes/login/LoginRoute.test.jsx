import React from 'react';
import { shallow } from 'enzyme';
import LoginRoute from './LoginRoute';
import { Row, Col } from 'antd';

describe('Loginroute', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<LoginRoute />);
	});

	it('should Login Route was created', () => {
		expect(wrapper).toBeDefined();
	});

	it('should Login Form is inside Login Route', () => {
		expect(wrapper.find('LoginForm').exists()).toBe(true);
	});

	it('should check all the props of Row', () => {
		const rowWrapper = wrapper.find(Row);
		expect(rowWrapper.prop('type')).toBe('flex');
		expect(rowWrapper.prop('justify')).toBe('center');
		expect(rowWrapper.prop('className')).toBe('LoginRoute');
	});

	it('should check all the props of Col', () => {
		const rowWrapper = wrapper.find(Col);
		expect(rowWrapper.prop('xs')).toEqual(12);
	});
});
