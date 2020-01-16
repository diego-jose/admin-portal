import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import AppRouter from '../routes/AppRouter';

describe('App', () => {
	it('should render an AppRouter', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.find(AppRouter).exists()).toBe(true);
	});
});
