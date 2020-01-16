import { shallow } from 'enzyme';
import MainRoute from './MainRoute';
import React from 'react';

describe('MainRouter', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<MainRoute />);
	});

	it('should Main Route was created', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('should prop path is in Route', () => {
		expect(wrapper.contains(<div />)).toBe(true);
	});
});
